var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cleanCss = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var less = require('gulp-less');

gulp.task('script', function () {
  gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

gulp.task('css', function () {
  gulp.src('css/*.css')
    .pipe(cleanCss())
    .pipe(gulp.dest('dist/css'))
});

gulp.task('images', function () {
  gulp.src('images/*.*')
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest('dist/images'))
});

gulp.task('less', function () {
  gulp.src('less/*.less')
    .pipe(less())
    .pipe(cleanCss())
    .pipe(gulp.dest('dist/css'))
});

gulp.task('auto', function () {
  gulp.watch('js/*.js', ['script']);
  gulp.watch('css/*.css', ['css']);
  gulp.watch('images/*.*', ['images']);
  gulp.watch('less/*.less', ['less']);
});

gulp.task('default', ['script', 'css', 'images', 'less', 'auto']);