"use strict"
var express = require('express')
var configurations = module.exports
var app = express()
var nconf = require('nconf')
var settings = require('./settings')(app, configurations, express)

app.helpers(require('connect-cachify'))

nconf.argv().env().file({ file: 'local.json' })

// Routes
require('./routes')(app)

app.listen(process.env.PORT || nconf.get('port'))