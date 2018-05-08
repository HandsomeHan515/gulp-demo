var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cleanCss = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var less = require('gulp-less');
var sass = require('gulp-ruby-sass');

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

gulp.task('sass', function () {
  return sass('sass/')
    .on('error', function (err) {
      console.error('Error', err.message);
    })
    .pipe(cleanCss())
    .pipe(gulp.dest('dist/css'))
});

gulp.task('auto', function () {
  gulp.watch('js/*.js', ['script']);
  gulp.watch('css/*.css', ['css']);
  gulp.watch('images/*.*', ['images']);
  gulp.watch('less/*.less', ['less']);
  gulp.watch('sass/*.sass', ['sass'])
});

gulp.task('default', ['script', 'css', 'images', 'less', 'sass', 'auto']);