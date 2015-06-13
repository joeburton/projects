module.exports = function(grunt) {

    grunt.initConfig({

        bowercopy: {
            options: {
                runBower: false
            },
            js: {
                options: {
                    destPrefix: 'js/lib'
                },
                files: {
                    'require.js': 'requirejs/require.js',
                    'almond.js': 'almond/almond.js',
                    'text.js': 'text/text.js',
                    'jquery.js': 'jquery/dist/jquery.js',
                    'bootstrap.js': 'bootstrap/dist/js/bootstrap.js',
                    'underscore.js': 'underscore/underscore.js',
                    'backbone.js': 'backbone/backbone.js'
                }
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true, 
                        src: ['images/*'], 
                        dest: '../public/images'
                    },
                    {
                        expand: true, 
                        src: ['fonts/*'], 
                        dest: '../public/'
                    }
                ]
            }
        },
        cssmin: {
            combine: {
                files: {
                    '../public/css/main.css': ['css/bootstrap.min.css', 'css/custom.css']
                }
            }
        },
        concat: {
            css: {
                src: ['css/bootstrap.min.css', 'css/custom.css'],
                dest: '../public/css/main.css'
            }
        },
        watch:{
            files: ['css/*.css', 'js/**', 'templates/**'],
            tasks: ['requirejs:dev', 'concat:css'],
            options: {
                spawn: false
            }
        },
        requirejs: {
            options: {
                baseUrl: 'js',
                webroot: 'js',
                config: ['main.js'],
                name: 'main',
                require: 'lib/require',
                almond: 'lib/almond',
                includeAlmond: true,
                out: '../public/js/main.js'
            },
            dev: {
                options: {
                    build: true, // 
                    optimize: 'none' // don't uglify
                }
            },
            prod: {
                options: {
                    build: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-require');

    grunt.registerTask('build-dev', ['copy', 'requirejs:dev', 'concat:css']);
    grunt.registerTask('build-prod', ['copy', 'requirejs:prod', 'cssmin']);

};
