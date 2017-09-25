'use strict';

const bitly = require('metalsmith-bitly');
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

gulp.task('build', () => {
  return Metalsmith(__dirname)
    .metadata({
      siteName: 'Welch Canavan: UX Developer',
      siteURL: 'http://welchcanavan.com/',
      GA: 'UA-41030734-1',
    })
    .source('../../src/site')
    .destination('../../build')
    .clean(true)
    .use(collections({
      posts: {
        pattern: 'posts/*.md',
        sortBy: 'date',
        reverse: true
      }
    }))
    .use(markdown())
    .use(permalinks({
      linksets: [
        {
          match: { collection: 'posts' },
          pattern: ':slug'
        }
      ]})
    )
    .use(bitly({
      accessToken: config.bitlyToken,
      baseURLGlobalMetadataKey: 'siteURL',
      brandedShortDomain: 'http://xiw.cx/',
      pathMetadataKey: 'slug',
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
