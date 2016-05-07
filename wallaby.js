module.exports = function (wallaby) {
  // There is a weird error with the mui and mantra.
  // See: https://goo.gl/cLH8ib
  // Using require here seems to be the error.
  // Renaming it into `load` just fixed the issue.
  var load = require;

  return {
    files: [
      { pattern: 'imports/client/**/*.test.jsx', ignore: true },
      'imports/client/modules/**/components/*.jsx',
      'imports/client/modules/**/actions/*.js',
      'imports/client/modules/**/containers/*.js',
      'imports/client/modules/**/libs/*.js'
    ],
    tests: [
      'imports/client/**/*.test.jsx'
    ],
    compilers: {
       '**/*.js*': wallaby.compilers.babel({
         babel: load('babel-core'),
         presets: ['es2015', 'stage-2', 'react']
       })
    },
    env: {
      type: 'node'
    },
    testFramework: 'mocha',
    setup: function() {
      global.React = require('react');
    }
  };
};
