var gulp = require('gulp'),
    cssnano = require('gulp-cssnano');

gulp.task('default',function () {
    gulp.src(['build/*','build/*/**'])
        .pipe(cssnano())
        .pipe(gulp.dest('dist/'));
});
