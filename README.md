# grunt-express-bootstrap

Builds an express projects using grunt which uses twitter bootstrap.

## Getting Started
Install the module with: `npm install grunt-express-bootstrap -g`

## Documentation
This module is wraps grunt and includes an init template which bootstraps express projects.

These projects include:

* [connect-cachify](https://github.com/mozilla/connect-cachify)
* [twitter bootstrap](http://twitter.github.com/bootstrap/)
* [JQuery](http://jquery.com/)
* [bower](http://twitter.github.com/bower/)
* [jade](http://jade-lang.com/)
* [winston-request-logger](https://github.com/wolfeidau/winston-request-logger)

All preconfigured and ready to run.

To use to build a new project simply:

```bash
$ mkdir mynewproject
$ cd mynewproject
$ grunt-express-bootstrap init
$ npm install
$ bower install
$ node app.js
```

Then visit <http://localhost:3000>.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/gruntjs/grunt).

## Release History

* 0.1.0 Initial proof of concept.
* 0.1.1 Added twitter bootstrap, JQuery and a bunch of stuff to make this more usable.
* 0.1.2 Fixed issues with bower files.

## License
Copyright (c) 2012 Mark Wolfe  
Licensed under the MIT license.
