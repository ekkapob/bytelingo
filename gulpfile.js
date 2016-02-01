var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var minifyCss = require('gulp-minify-css');

gulp.task('sass', function() {
  gulp.src('./web/static/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    // .pipe(sourcemaps.init())
      // .pipe(minifyCss())
      // .pipe(concat('all.css'))
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest('./web/static/css/'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./web/static/scss/*.scss', ['sass']);
});
