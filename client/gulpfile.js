var gulp = require('gulp'),
    shell = require('gulp-shell'),
    concat = require('gulp-concat'), // js and css
    rename = require('gulp-rename'),
    batch = require('gulp-batch'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify'), // js
    uglifycss = require('gulp-uglifycss'); // css

// concat and uglify js using requires default compiler
gulp.task('js', shell.task([
	'r.js -o build.js'
]));

// concat and uglify css
gulp.task('css', function(){
    return gulp.src(['css/bootstrap.min.css', 'css/custom.css'])
        .pipe(concat('main.css'))
        .pipe(gulp.dest('../public/css/'))
        .pipe(rename('main.css'))
        .pipe(uglifycss())
        .pipe(gulp.dest('../public/css/'));
});

gulp.task('build', function () {
	console.log('Working!'); 
});

gulp.task('watch', function () {
    watch('js/*.js', function () {
        gulp.start(['css', 'js', 'build']);
    });
});