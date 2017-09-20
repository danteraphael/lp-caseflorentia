var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var reload      = browserSync.reload;

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});

// Static server
gulp.task('browser', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

		gulp.watch("*.html").on("change", reload);
		//gulp.watch(browserSync.stream({match: '*.html'}));
});

gulp.task('images', () =>
	gulp.src('images/src/*')
		.pipe(imagemin())
		.pipe(gulp.dest('images/dist'))
);

//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles','images']);
});
