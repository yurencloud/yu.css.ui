const {src, task, watch, series, dest} = require('gulp');
const connect = require('gulp-connect');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');

task('server', function () {
    watch(['src/*.scss', 'src/*/*.scss'], series('scss'))
    connect.server({
        root: ['./', 'example'],
        livereload: true,
        port: 9000
    });
});

task('scss', function () {
    return src(['src/*.scss', 'src/*/*.scss'])
        .pipe(sass())
        .pipe(dest('css/'));
});

task('compress', function () {
    return src(['css/*.css', 'src/*/*.css'])
        .pipe(cssnano())
        .pipe(dest('dist/'));
});

// 开发环境
task('start', series('server'))

// 打包压缩
task('build', series('scss', 'compress'))
