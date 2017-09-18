'use strict';

const autoprefixer = require('gulp-autoprefixer');
const bs = require('browser-sync').get('devServer');
const config = require('../config');
const collections = require('metalsmith-collections');
const gulp = require('gulp');
const handlebars = require('handlebars');
const layouts = require('metalsmith-layouts');
const markdown = require('metalsmith-markdown');
const Metalsmith = require('metalsmith');
const permalinks  = require('metalsmith-permalinks');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('build', function() {
  return Metalsmith(__dirname)
    .metadata({
      siteName: 'Welch Canavan: UX Developer',
      siteUrl: 'http://welchcanavan.com/',
      GA: 'UA-41030734-1',
    })
    .source('../../src/site')
    .destination('../../build')
    .clean(true)
    .use(collections({
      posts: '../../src/posts/*.md'
    }))
    .use(markdown())
    .use(permalinks({
      relative: false
    }))
    .use(layouts({
      directory: "../../src/layouts",
      engine: 'handlebars',
      partials: '../../src/partials',
      partialExtension: '.hbs',
    }))
    .build(function(err) {
      if (err) throw err;
  });
});

// gulp.task('build', function() {
//   return gulp.src(config.stylesSrc)
//     .pipe(sourcemaps.init())
//       .pipe(sass().on('error', sass.logError))
//       .pipe(autoprefixer())
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest(config.stylesCompiledDir))
//     .pipe(bs.stream({once: true}));
// });
