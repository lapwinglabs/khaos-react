/**
 * Load environment variables
 */

require('./lib/env')

/**
 * Ensure our environment variables
 * are set before doing anything
 * throw otherwise.
 */

var envvar = require('envvar')
envvar.number('PORT')

/**
 * Module Dependencies
 */

// var debug = require('debug')('{app}')
var roo = module.exports = require('roo')(__dirname)
var bundle = require('www-bundle')
var port = process.env.PORT

/**
 * Bundling
 */

roo.use(bundle())
bundle('react')

/**
 * Mounts
 */

roo.mount('/', require('./pages/home'))

/**
 * Cluster support
 */

// roo.cluster()

/**
 * Listen
 */

roo.listen(port, function () {
  var addr = this.address()
  console.log('listening to [%s]:%s', addr.address, addr.port)
})
