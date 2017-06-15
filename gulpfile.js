const gulp   = require('gulp');
const babel  = require('gulp-babel');
const concat = require('gulp-concat');
const minify = require('gulp-minify');

gulp.task('assemble', () => {
    return  gulp.src(['src/main.js'])
                .pipe(concat('bookmarklet.js'))
                .pipe(babel({ presets: ['es2015'], comments: false }))
                .pipe(gulp.dest('build'));
});

gulp.task('compress', [ 'assemble' ], () => {
    return  gulp.src(['build/*.js', '!build/*.min.js'])
                .pipe(minify({
                    ext: {
                        src:'.js', // don't touch original file build with babel
                        min:'.min.js'
                    }
                }))
                .pipe(gulp.dest('build'))
});

gulp.task('default', [ 'compress' ]);

// Note: when switching to Gulp 4, remove task dependencies and execute in series.
//
// gulp.task('default', gulp.series('assemble', 'compress'));
