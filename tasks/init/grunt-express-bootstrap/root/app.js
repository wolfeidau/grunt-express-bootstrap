var express = require('express')
var configurations = module.exports
var app = express()
var nconf = require('nconf')

// load the settings
require('./settings')(app, configurations, express)

// merge nconf overrides with the configuration file.
nconf.argv().env().file({ file: 'local.json' })

// Routes
require('./routes')(app)

app.listen(process.env.PORT || nconf.get('port'))