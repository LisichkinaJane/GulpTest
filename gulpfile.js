var gulp = require('gulp');
var concat = require('gulp-concat-css');
var mincss = require('gulp-cssmin');
var rename = require('gulp-rename');


gulp.task('css', function () {
  return gulp.src('source/**/*.css')
    .pipe(concat("/bundle.css"))
    .pipe(gulp.dest('build/style'));
});

gulp.task('cssmin', function(){
    return gulp.src('build/style/**/*.css')
    .pipe(mincss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build/style/min'));
});