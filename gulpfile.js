var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCss = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch');

gulp.task('sass', function () {
    return gulp.src('sass/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({browsers: ['last 2 versions']}))
        .pipe(gulp.dest('css/'))
});

gulp.task('concat', function () {
    return gulp.src('css/*.css')
        .pipe(concat('main.css'))
        .pipe(rename({ suffix: ".min" }))
        .pipe(cleanCss({ compatibility: 'ie8' }))
        .pipe(gulp.dest('public/'))
});

gulp.task('watch', function () {
    gulp.watch('sass/*.scss', ['sass']);
});

gulp.task('default', ['watch']);
