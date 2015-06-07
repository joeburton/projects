module.exports = function(grunt) {

    grunt.initConfig({

        bowercopy: {
            options: {
                runBower: false
            },
            js: {
                options: {
                    destPrefix: '../public/js/lib'
                },
                files: {
                    'jquery.js': 'jquery/dist/jquery.js',
                    'bootstrap.js': 'bootstrap/dist/bootstrap.min.js',
                    'underscore.js': 'underscore/underscore-min.js',
                    'backbone.js': 'backbone/backbone.js'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.registerTask('vendor', ['bowercopy']);

};