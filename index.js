const browserSync = require('metalsmith-browser-sync')
const collections = require('metalsmith-collections')
const htmlMinifier = require('metalsmith-html-minifier')
const inPlace = require('metalsmith-in-place')
const layouts = require('metalsmith-layouts')
const markdown = require('metalsmith-markdown')
const metallic = require('metalsmith-metallic')
const Metalsmith = require('metalsmith')
const msIf = require('metalsmith-if')
const permalinks = require('metalsmith-permalinks')
const watch = require('metalsmith-watch')

const isDevBuild = process.argv[2] === 'dev'
const isProdBuild = process.argv[2] === 'prod'

Metalsmith(__dirname)
  .metadata({
    isDevBuild,
    isProdBuild,
    siteName: 'Welch Canavan: UX Developer'
  })
  .source('./src/site')
  .use(collections({
    posts: {
      pattern: 'posts/**/*.md',
      sortBy: 'date',
      reverse: true
    },
    works: 'work/**/*.md'
  }))
  .use(metallic())
  .use(markdown())
  .use(layouts({
    default: 'default.njk',
    engine: 'nunjucks'
  }))
  .use(inPlace())
  .use(permalinks({
    linksets: [
      {
        match: { collection: 'posts' },
        pattern: ':slug'
      },
      {
        match: { collection: 'works' },
        pattern: ':slug'
      }
    ]
  }))

  // development specific tasks
  .use(msIf(
    isDevBuild,
    watch({
      paths: {
        './src/site/**/*': true,
        './layouts/**/*': '**/*'
      }
    })
  ))
  .use(msIf(
    isDevBuild,
    browserSync()
  ))

  // production specific tasks
  .use(msIf(
    isProdBuild,
    htmlMinifier()
  ))
  .build(function (err) {
    if (err) throw err
  })
