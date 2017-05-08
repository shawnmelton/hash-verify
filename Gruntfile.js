module.exports = (function(grunt) {
    'use strict';

    grunt.initConfig({
        browserify: {
            dist: {
                options: {
                    transform: [['babelify', {presets: ['es2015', 'react']}]]
                },
                src: ['web-src/js/index.js'],
                dest: 'tmp/build.js'
            }
        },
        sass: {
            dist: {
                files: {
                    'tmp/styles.css': 'web-src/css/styles.scss'
                },
                options: {
                    style: 'compressed'
                }
            }
        },
        copy: {
            prod: {
                expand: true,
                cwd: 'web-src',
                src: ['index.html'],
                dest: 'tmp'
            }
        },
        uglify: {
            options: {
                mangle: false,
                wrap: true
            },
            my_target: {
                files: {
                    'tmp/build.js': ['tmp/build.js']
                }
            }
        },
        embed: {
            dist: {
                options: {
                    threshold: '300KB'
                },
                files: {
                    'html/index.html': 'tmp/index.html'
                }
            }
        },
        clean: {
            pre: ['html'],
            post: ['tmp']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-embed');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', [
        'clean:pre', 'copy', 'sass', 'browserify', /*'uglify',*/ 'embed', 'clean:post'
    ]);
});