#!/usr/bin/env node

var railsConsoleRunner = require('../rails-console-runner.js'),
    snaptest = require('../snaptest.js');

snaptest.loadConfig(function () {
  snaptest.log('fetching paths from your Rails application...');

  railsConsoleRunner.run(__dirname + '/path_miner.rb', { 'host': snaptest.config.host }, runSnaptest);

  function runSnaptest(paths) {
    snaptest.log('paths loaded!');

    snaptest.paths = JSON.parse(JSON.parse(paths));

    snaptest.run();
  };
});
