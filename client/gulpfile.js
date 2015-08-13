var gulp = require('gulp'),
    shell = require('gulp-shell');

// uses build.js to configure the squish
gulp.task('scripts', shell.task([
	'r.js -o build.js'
]))


// gulp.task('build', [
//     'concat',
//     'sass',
//     'cssopt',
//     'images',
//     'scripts',
// ]);