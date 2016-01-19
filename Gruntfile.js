module.exports = function (grunt) {

  'use strict';

  grunt.loadNpmTasks('grunt-browserify');

  // Project configuration.
  grunt.initConfig({

    browserify: {
      options: {
        browserifyOptions: {
          debug: true
        }
      },
      sample: {
        files: {
          'build/sample.js': 'src/**/*.js'
        }
      },
      watch: {
        files: {
          'build/sample.js': 'src/**/*.js'
        },
        options: {
          keepAlive: true,
          watch: true
        }
      }
    }

  });

  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['browserify:sample']);
  grunt.registerTask('watch', ['browserify:watch']);

};
