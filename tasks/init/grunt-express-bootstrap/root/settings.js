module.exports = function (app, configurations, express) {

    var nconf = require('nconf')
        , cachify = require('connect-cachify')
        , winston = require('winston')


    nconf.argv().env().file({ file: 'local.json' })

    // load assets node from configuration file.
    var assets = nconf.get('assets') || {}

    // Development Configuration
    app.configure('development', 'test', function(){
        // Request Logging
        var logger = new (winston.Logger)({ transports: [ new (winston.transports.Console)({colorize:true}) ] })
        // register the request logger
        app.use(require('winston-request-logger').create(logger))
        app.set('DEBUG', true)
        app.use(express.errorHandler({ dumpExceptions: true, showStack: true }))
    })

    // Production Configuration
    app.configure('production', function(){
        app.set('DEBUG', false)
        app.use(express.errorHandler())
    })

    // Cachify Asset Configuration
    app.use(cachify.setup(assets, {
        root: __dirname + '/public',
        production: nconf.get('cachify')
    }))

    // Global Configuration
    app.configure(function(){

        app.set('views', __dirname + '/views')
        app.set('view engine', 'jade')
        app.set('view options', { layout: false })
        app.use(express.bodyParser())
        app.use(express.methodOverride())
        app.use(express.static(__dirname + '/public'))

        app.use(app.router)

    })

    return app
}