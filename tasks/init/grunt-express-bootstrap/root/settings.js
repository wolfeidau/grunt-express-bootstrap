module.exports = function (app, configurations, express) {

    var nconf = require('nconf');
    var cachify = require('connect-cachify');

    nconf.argv().env().file({ file: 'local.json' });

    // load assets node from configuration file.
    var assets = nconf.get('assets') || {};

    // Configuration
    app.use(cachify.setup(assets, {
        root: __dirname + '/public',
        production: nconf.get('cachify')
    }));

    app.configure(function(){

        app.set('views', __dirname + '/views');
        app.set('view engine', 'jade');
        app.set('view options', { layout: false });
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(express.static(__dirname + '/public'));

        app.use(app.router);

    });

    app.configure('development', 'test', function(){
        app.set('DEBUG', true);
        app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    });

    app.configure('production', function(){
        app.set('DEBUG', false);
        app.use(express.errorHandler());
    });

    return app;
};