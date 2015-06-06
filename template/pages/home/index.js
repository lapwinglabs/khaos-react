/**
 * Module Dependencies
 */

var roo = module.exports = require('roo')(__dirname)
var bundle = require('www-bundle')
var join = require('path').join

/**
 * Bundle
 */

bundle(join(__dirname, 'home.js'))
bundle(join(__dirname, 'home.css'))

/**
 * Routes
 */

roo.get(/\/(.*)/, function * (next) {
  this.body = yield roo.render('home.jade', this.locals)
})
