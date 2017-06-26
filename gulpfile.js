'use strict';

const requireDir = require('require-dir');
const bs = require('browser-sync').create('devServer');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });
