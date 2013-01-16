module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({

        lint:{
            files: ["grunt.js", "bin/grunt-express-bootstrap", "tasks/init/grunt-express-bootstrap.js"]
        },

        jshint:{
            options:{
                asi: true,
                curly:true,
                laxcomma: true,
                eqeqeq:true,
                immed:true,
                latedef:true,
                newcap:true,
                noarg:true,
                sub:true,
                undef:true,
                boss:true,
                eqnull:true,
                node:true,
                "strict":false
            },
            globals:{
                exports:true
            }
        }
    });

    // Load local tasks.
    grunt.loadTasks("tasks");

    // Default task.
    grunt.registerTask("default", "lint");

};