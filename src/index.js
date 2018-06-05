var berycoinjs = require('bitcoinjs-lib')

Object.assign(berycoinjs.networks, require('./networks'))

berycoinjs.utils = require('./utils')

module.exports = berycoinjs