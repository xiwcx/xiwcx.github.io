const configPrivate = require('./config.private');

config = {
  rootDir: './src/site/',
  srcDir: './src/',

  // style paths
  stylesCompiled: './.tmp/styles/main.css',
  stylesCompiledDir: './.tmp/styles/',
  stylesSrc: './src/styles/main.scss',
  stylesSrcDir: './src/styles/',

  buildDir: './build/',
  tmpDir: './.tmp/',
};

module.exports = Object.assign(config, configPrivate);
