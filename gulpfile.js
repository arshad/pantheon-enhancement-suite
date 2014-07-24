/**
 * Gulpfile.js
 */
var gulp = require('gulp');
var compass = require('gulp-compass');

// Paths.
var paths = {
  sass: ['./assets/sass/*.scss', './assets/sass/**/*.scss']
};

// Compass task.
gulp.task('compass', function() {
  gulp.src(paths.sass)
    .pipe(compass({
      config_file: './config.rb',
      css: './assets/stylesheets',
      sass: './assets/sass'
    }))
    .pipe(gulp.dest('./assets/stylesheets'));
});

// Watch task.
gulp.task('watch', function() {
  gulp.watch(paths.sass, ['compass']);
});

gulp.task('default', ['watch', 'compass']);
