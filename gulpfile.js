var gulp = require('gulp');
var sass = require('gulp-sass');
var sassThemes = require('gulp-sass-themes');
var concatCSS = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var uncss = require('gulp-uncss');
 
gulp.task('scss-css', function(){
 return gulp.src('./css/*.scss')
  .pipe(sassThemes('./css/themes/_*.scss'))
  .pipe(sass()).on('error', sass.logError)
  .pipe(gulp.dest('./temp-css/'))
});

/*gulp.task('styles-concat', function(){
 return gulp.src('./temp-css/*.css')
  .pipe(concatCSS('bundle.css')) 
  .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: true
        }))
  .pipe(cleanCSS())
  .pipe(gulp.dest('./temp-css/'))
});

gulp.task('styles-minify', function(){
  return gulp.src('./temp-css/*.css')
    .pipe(concatCSS('style.min.css'))
    .pipe(uncss({
            html: ['index.html']
        }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./'))
});*/

gulp.task('default', [ 'scss-css'/*, 'styles-concat', 'styles-minify'*/ ]);

gulp.task('watch', function(){
  gulp.watch('css/*.scss', ['default'])
});