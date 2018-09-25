var fs = require('fs'),
    lineReader = require('line-reader'),
    child = require('child_process').spawn('bundle', [ 'exec', 'rails', 'console' ]);

function RailsConsoleRunner() {}

RailsConsoleRunner.prototype.run = function (railsCommand, params, callback) {
  var railsConsoleCommand = '';

  if (fs.existsSync(railsCommand)) {
    lineReader.eachLine(railsCommand, function (line) {
      line = line.trim();

      for(var param in params) {
        var value = params[param];

        line = line.replace('$' + param + '$', value);
      }

      railsConsoleCommand += line;

      if (line[line.length - 1] && line[line.length - 1] != '|')
        railsConsoleCommand += ';';
      else
        railsConsoleCommand += ' ';
    }).then(function () {
      railsConsoleCommand = railsConsoleCommand.replace(/;$/, '\n');

      process();
    });
  } else {
    railsConsoleCommand = railsCommand;

    process();
  }

  function process() {
    var railsConsoleCommandProcessed, railsConsoleCommandStdinRead = false;

    child.stdout.on('data', function (data) {
      if (railsConsoleCommandStdinRead) {
        callback(data);

        child.kill();
      }

      if (data + '' == railsConsoleCommand) railsConsoleCommandStdinRead = true;

      if (!railsConsoleCommandProcessed) {
        child.stdin.write(railsConsoleCommand);
        
        railsConsoleCommandProcessed = true;
      }
    });
  }
}

module.exports = new RailsConsoleRunner();
