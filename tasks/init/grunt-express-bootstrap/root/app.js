var express = require('express')
    , configurations = module.exports
    , app = express()
    , nconf = require('nconf')
    , winston = require('winston')

// load the settings
require('./settings')(app, configurations, express)

// merge nconf overrides with the configuration file.
nconf.argv().env().file({ file: 'local.json' })

// Routes
require('./routes')(app)

winston.info('listening on %s', nconf.get('port'))

app.listen(process.env.PORT || nconf.get('port'))