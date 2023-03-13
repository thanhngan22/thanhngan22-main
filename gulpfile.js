const gulp = require('gulp');
const sass = require('gulp-sass');

// Define a task to compile SCSS to CSS
gulp.task('sass', function() {
  return gulp.src('src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

// Define a watch task to automatically compile SCSS to CSS
gulp.task('watch', function() {
  gulp.watch('src/styles/**/*.scss', gulp.series('sass'));
});
