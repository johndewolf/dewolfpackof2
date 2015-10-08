module.exports = function(grunt) {
  grunt.initConfig({

  sass: {                              // Task
    dist: {                            // Target
      options: {                       // Target options
        style: 'expanded'
      },
      files: {                         
        'css/main.css': 'sass/main.scss'
      }
    }
  },

    imageoptim: {
      myTask: {
        src: ['img/']
      }
    },

    //Watch
    watch: {
      files: ['**/*.scss','js/main.js'],
      tasks: ['sass'],
      options: {
        livereload: true,
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-imageoptim');
  grunt.registerTask('default', ['watch']);
};
