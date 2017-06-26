'use strict';

const config = require('../config');
const gulp = require('gulp');

gulp.task('build', function() {
  return gulp.src(config.stylesSrc)
    .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.stylesCompiledDir))
    .pipe(bs.stream({once: true}));
});
