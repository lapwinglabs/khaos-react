var localenv = require('localenv/noload')
var join = require('path').join

/**
 * Environment
 */

var production = process.env.NODE_ENV === 'production'

/**
 * Paths
 */

var root = join(__dirname, '..', '..')
var env = join(root, '.env')
var env_local = join(root, '.env.local')

/**
 * Inject environment variables
 */

if (production) {
  localenv.inject_env(env_local)
} else {
  localenv.inject_env(env)
  localenv.inject_env(env_local)
}
