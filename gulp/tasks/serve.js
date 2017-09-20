'use strict';

const bs = require('browser-sync').get('devServer');
const config = require('../config');
const gulp = require('gulp');

// Static server
gulp.task('serve', ['clean', 'build', 'styles'], function() {
  bs.init({
    open: 'external',
    port: 3001,
    xip: true,
    server: {
      baseDir: [
        config.buildDir,
        config.tmpDir
      ]
    }
  });

  // watch source files
  gulp.watch(config.rootDir + '**/*.md', ['build']);
  gulp.watch(config.srcDir + 'layouts/**/*.hbs', ['build']);
  gulp.watch(config.srcDir + 'partials/**/*.hbs', ['build']);
  // bs.watch(config.scriptsCompiledDir, bs.reload);
  // gulp.watch(config.scriptsSrcDir + '**/*.js', ['scripts']);
  gulp.watch(config.stylesSrcDir + '**/*.scss', ['styles']);

  // watch compiled files
  bs.watch(config.buildDir).on('change', bs.reload);
});
