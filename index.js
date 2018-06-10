const browserSync = require('metalsmith-browser-sync');
const collections = require('metalsmith-collections');
const htmlMinifier = require('metalsmith-html-minifier');
const inPlace = require('metalsmith-in-place');
const layouts = require('metalsmith-layouts');
const markdown = require('metalsmith-markdown');
const Metalsmith = require('metalsmith');
const msIf = require('metalsmith-if');
const watch = require('metalsmith-watch');

const isDevBuild = process.argv[2] === 'dev';
const isProdBuild = process.argv[2] === 'prod';

Metalsmith(__dirname)
    .metadata({
        siteName: 'Welch Canavan: UX Developer',
        siteURL: 'http://welchcanavan.com/',
        GA: 'UA-41030734-1',
    })
    .source('./src/site')
    .use(collections({
        posts: {
            pattern: 'posts/**/*.md',
            sortBy: 'date',
            reverse: true
        }
    }))
    .use(markdown())
    .use(layouts({
        default: 'default.njk',
        engine: 'nunjucks'
    }))
    .use(inPlace())

    // development specific tasks
    .use(msIf(
        isDevBuild,
        watch({
            paths: {
                "${source}/**/*": true,
                "layouts/**/*": "**/*",
            },
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
        if (err) throw err;
    });