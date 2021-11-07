const { task } = require('gulp');

const gulp = require('gulp'),
    pug = require('gulp-pug'),
    concat = require('gulp-concat'),
    cssnano = require('gulp-cssnano'),
    prfix = require('gulp-autoprefixer'),
    // minjs = require('gulp-terser'),
    sass = require('gulp-sass')(require('sass'));


//html task
gulp.task('html', () => {
    return gulp.src('./project/html/*.pug')
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest('./dist/html'))
})

//css
gulp.task('css', () => {
    return gulp.src('./project/css/style.scss', { sourcemaps: true })
        .pipe(prfix('last 2 version'))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css', { sourcemaps: '.' }));
})

//js task
// gulp.task('js', () => {
//     gulp.src('./project/js/*.js')
//         .pipe(gulp.dest('./dist/js'))
// })

gulp.task('watch', function() {
    // gulp.watch('./project/js/*.js', gulp.series('js'))
    gulp.watch('./project/html/**/*.pug', gulp.series('html'))
    gulp.watch('./project/css/**/*.scss', gulp.series('css'))
});

gulp.task('default', gulp.series('watch'));