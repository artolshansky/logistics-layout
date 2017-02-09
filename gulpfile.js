var gulp = require('gulp');
var sass = require('gulp-sass');
var sassThemes = require('gulp-sass-themes');
var concatCSS = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var uncss = require('gulp-uncss');
 
gulp.task('scss-css', function(){
 return gulp.src('./scss/*.scss')
  .pipe(sass()).on('error', sass.logError)
  .pipe(gulp.dest('./css/'))
});

gulp.task('styles-bundle', function(){
 return gulp.src('./css/*.css')
  .pipe(concatCSS('style.min.css'))
  .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: true
        }))
  .pipe(uncss({
          html: ['index.html']
        }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./'))
});

gulp.task('default', [ 'scss-css', 'styles-bundle' ]);

gulp.task('watch', function(){
  gulp.watch('scss/*.scss', ['scss-css'])
});