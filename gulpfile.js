var gulp = require('gulp');
var sass = require('gulp-sass');
// var livereload = require('gulp-livereload');
var connect = require('gulp-connect');

// Path to localhost on AspIT computer:
var localhost = '';

var paths = {
	src: 'src/**/*',
	srcHTML: 'src/**/*.html',
	srcPHP: 'src/**/*.php',
	srcSCSS: 'src/scss/**/*.scss',
	srcJS: 'src/js/**/*.js',
	scrIMG: 'src/img/*',

	tmp: localhost + 'tmp',
	tmpHTML: localhost + 'tmp/**/*.html',
	tmpCSS: localhost + 'tmp/css/',
	tmpJS: localhost + 'tmp/js/',
	tmpIMG: localhost + 'tmp/img/'
};

gulp.task('default', ['watch', 'connect']);

gulp.task('html', function () {
	return gulp.src(paths.srcHTML)
		.pipe(gulp.dest(paths.tmp))
		.pipe(connect.reload());
});

gulp.task('img', function () {
	return gulp.src(paths.scrIMG)
		.pipe(gulp.dest(paths.tmpIMG))
		.pipe(connect.reload());
});

gulp.task('css', function () {
	return gulp.src(paths.srcSCSS)
		.pipe(sass())
		.pipe(gulp.dest(paths.tmpCSS))
		.pipe(connect.reload());
});

gulp.task('js', function () {
	return gulp.src(paths.srcJS)
		.pipe(gulp.dest(paths.tmpJS))
		.pipe(connect.reload());
});

gulp.task('connect', function() {
    connect.server({
        root: paths.tmp,
        livereload: true
    })
});

gulp.task('watch', ['html', 'css', 'js', 'img'], function () {
	// livereload.listen();
	gulp.watch(paths.srcHTML, ['html']);
	gulp.watch(paths.srcSCSS, ['css']);
	gulp.watch(paths.srcJS, ['js']);
	gulp.watch(paths.srcIMG, ['img']);
});
