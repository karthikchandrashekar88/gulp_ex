// grab our gulp packages
var gulp = require('gulp'),
    gutil = require('gulp-util');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify');

// create a default task and just log a message
gulp.task('default', function () {
  return gutil.log('Gulp is running!')
});

gulp.task('compress', function() {
  gulp.src('lib/*.js')
      .pipe(minify({
        ext:{
          src:'-min.js',
          min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
      }))
      .pipe(gulp.dest('dist'))
});

// including plugins
var uglify = require("gulp-uglify");

// task
gulp.task('minify-js', function () {
  gulp.src('./lib/*.js') // path to your files
      .pipe(uglify())
      .pipe(gulp.dest('./dist'));
});