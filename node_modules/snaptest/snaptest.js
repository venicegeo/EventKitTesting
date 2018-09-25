var fs = require('fs'),
    Nightmare = require('nightmare'),
    lineReader = require('line-reader');

function Snaptest () {
  this.DEFAULTS = {
    'configFilename': 'snaptest.json',
    'resultsDirectory': 'snaptest'
  };

  this.paths = [];
  this.each = null;
  this.bodyHtml = '';
  this.resultTemplateHtml = '';
}

Snaptest.prototype.log = function (message) { console.log(message); };

Snaptest.prototype.loadConfig = function (success) {
  var self = this;

  if (!fs.existsSync(self.DEFAULTS.configFilename)) {
    self.log(self.DEFAULTS.configFilename + ' not found. creating ' + self.DEFAULTS.configFilename);

    return createConfig();
  }

  fs.readFile(self.DEFAULTS.configFilename, 'utf8', function (error, data) {
    self.config = JSON.parse(data);

    success();
  });

  function createConfig() {
    var snaptestJson = fs.createWriteStream(self.DEFAULTS.configFilename);

    return snaptestJson.once('open', function () {
      var json = '{\n\t"host": null\n}\n';

      snaptestJson.end(json);

      self.loadConfig(success);
    });
  }
}

Snaptest.prototype.run = function (callback) {
  var self = this;
  var config = self.config;

  if (!config) return self.loadConfig(function () { self.run(); });

  self.log('beginning snaptest!');

  if (!config.host) return self.log('please specify a host in ' + self.DEFAULTS.configFilename);

  loadPaths();

  if (!self.paths) return self.log('you have no paths configured in ' + self.DEFAULTS.configFilename);

  self.log('visiting all paths...');

  if (!fs.existsSync(self.DEFAULTS.resultsDirectory)) fs.mkdir(self.DEFAULTS.resultsDirectory);

  snapPathsForState(0);

  function loadPaths() {
    for (var pathName in config.paths) {
      var pathConfig = config.paths[pathName];
      var path = pathConfig.path;

      if (path) {
        var pathObject = {};

        if (/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(path))
          pathObject[pathName] = path;
        else
          pathObject[pathName] = (pathConfig.secure ? 'https://' : 'http://') + config.host + path;

        self.paths.push(pathObject);
      }
    }
  }

  function snapPathsForState(stateIndex) {
    if (config.states) {
      var state = Object.keys(config.states)[stateIndex];

      if (state) {
        var stateConfig = getStateConfig(state);

        if (stateConfig.partial) return processNextState();

        self.log('*** ' + state + ' ***');
        self.log('visiting paths...');

        var nightmare = createNightmare(stateConfig.width, stateConfig.height);

        if (stateConfig.before) injectNightmareActions(nightmare, stateConfig.before);

        snapPaths(state, nightmare, processNextState);

        function processNextState() { snapPathsForState(stateIndex + 1); }
      } else runFinished();
    } else snapPaths(config.defaultState, createNightmare(), runFinished);

    function snapPaths(state, nightmare, success) {
      self.paths.forEach(function (pathObject) {
        var path = Object.keys(pathObject)[0];

        if (isntIgnored()) {
          var pathConfig = {};

          if (config.paths && config.paths[path])
            pathConfig = config.paths[path];

          getPathCases(pathConfig).forEach(function (pathCase) {
            var pathPngPath;

            if (pathCase.name)
              pathPngPath = self.DEFAULTS.resultsDirectory + '/' + state + '-' + path + '-' + pathCase.name + '.png';
            else
              pathPngPath = self.DEFAULTS.resultsDirectory + '/' + state + '-' + path + '.png';

            var url = pathObject[path];

            if (pathCase.params) for (var pathParam in pathCase.params)
              url = url.replace('$' + pathParam + '$', pathCase.params[pathParam]);

            if (pathConfig.params) for (var pathParam in pathConfig.params)
              url = url.replace('$' + pathParam + '$', pathConfig.params[pathParam]);

            var snaptestResult = {
              'path': path,
              'case': pathCase.name,
              'state': state,
              'image': pathPngPath,
              'url': url
            };

            if (self.each) self.each(snaptestResult);

            getResultTemplate(function () {
              var resultHtml = self.resultHtmlTemplate;

              for(var attr in snaptestResult) {
                if (snaptestResult[attr])
                  resultHtml = resultHtml.replace('$' + attr + '$', snaptestResult[attr]);
              }
 
              resultHtml = resultHtml.replace(/^.*\$.*\$.*$/gm, '');

              self.bodyHtml += resultHtml;

              nightmare.goto(url);

              if (pathCase.actions) injectNightmareActions(nightmare, pathCase.actions);

              nightmare.screenshot(pathPngPath);
            });

            function getResultTemplate(callback) {
              if (!self.resultsHtmlTemplate) {
                fs.readFile(__dirname + '/result.html', 'utf8', function (error, data) {
                  self.resultHtmlTemplate = data + '';

                  callback();
                });
              } else callback();
            }
          });
        }

        function isntIgnored() {
          function isGloballyIgnored() {
            return (config.ignore ? config.ignore : []).indexOf(path) > -1;
          }

          function isIgnoredInState() {
            var stateConfig = getStateConfig(state);

            return (stateConfig.ignore ? stateConfig.ignore : []).indexOf(path) > -1;
          }

          return !isGloballyIgnored() && !isIgnoredInState();
        }

        function getPathCases(pathConfig) {
          var pathCases = [ {} ];

          if (pathConfig.cases) pathConfig.cases.forEach(function (pathCase) {
            var shouldPushPathCase = true;
            var inheritedStates = [];

            if (config.states && config.states[state] && config.states[state].inherits)
              inheritedStates = config.states[state].inherits;

            if (pathCase.only) pathCase.only.forEach(function (only) {
              if (state != only && inheritedStates.indexOf(only) == -1) {
                shouldPushPathCase = false;

                return;
              }
            });

            if (pathCase.except) pathCase.except.forEach(function (except) {
              if (state == except || inheritedStates.indexOf(except) > -1) {
                shouldPushPathCase = false;

                return;
              }
            });

            if (shouldPushPathCase) pathCases.push(pathCase);
          });

          return pathCases;
        }
      });

      nightmare.run(function () {
        self.log('visited all!');

        if (success) success();
      });
    }

    function getStateConfig(state) {
      if (!state || !config.states) return {};

      var stateConfig = config.states[state];

      if (stateConfig.inherits) {
        stateConfig.inherits.forEach(function (inheritedState) {
          var inheritedStateConfig = Object.create(config.states[inheritedState]);

          inheritedStateConfig.partial = null;

          for (var attr in stateConfig) { inheritedStateConfig[attr] = stateConfig[attr]; }

          stateConfig = inheritedStateConfig;
        });
      }

      return stateConfig;
    }

    function runFinished() {
      var resultsHtml = fs.createWriteStream(self.DEFAULTS.resultsDirectory + '/results.html');

      resultsHtml.once('open', function () {
        fs.readFile(__dirname + '/results.html', 'utf8', function (err, data) {
          html = data;

          html = html.replace('$body$', self.bodyHtml);

          resultsHtml.end(html);

          self.log('view results in ' + self.DEFAULTS.resultsDirectory + '/results.html');

          if (callback) callback();
        });
      });
    }

    function createNightmare(width, height) {
      function nightmareViewportWidth() {
        return width ? width : configWidth();

        function configWidth() { return config.width ? config.width : 1024; }
      }

      function nightmareViewportHeight() {
        return height ? height : configHeight();

        function configHeight() { return config.height ? config.height : 768; }
      }

      return new Nightmare()
        .viewport(nightmareViewportWidth(), nightmareViewportHeight())
        .on('error', function (msg, trace) { return; });
    }

    function injectNightmareActions(nightmare, nightmareActions) {
      nightmareActions.forEach(function (nightmareActionObject) {
        var nightmareAction = Object.keys(nightmareActionObject)[0];
        var nightmareActionArgs = nightmareActionObject[nightmareAction];

        switch(nightmareActionArgs.length) {
          case 0:
            nightmare[nightmareAction]();

            break;
          case 1:
            nightmare[nightmareAction](nightmareActionArgs[0]);

            break;
          case 2:
            nightmare[nightmareAction](nightmareActionArgs[0], nightmareActionArgs[1]);

            break;
          default:
            break;
        }
      })
    }
  }
};

module.exports = new Snaptest();
