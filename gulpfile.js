const gulp   = require('gulp');
const babel  = require('gulp-babel');
const header = require('gulp-header');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const fileinclude = require('gulp-file-include');

gulp.task('assemble', () => {
    return  gulp.src(['src/node.js', 'src/num.js', 'src/dataset.js', 'src/main.js'])
                .pipe(concat('bookmarklet.js'))
                .pipe(babel({
                    presets: [[
                        "@babel/env", {
                            "targets": {
                                "browsers": ["last 2 versions", "ie >= 11"]
                            }
                        }
                    ]],
                    comments: false
                }))
                .pipe(gulp.dest('build'));
});

gulp.task('compress', () => {
    return  gulp.src(['build/*.js', '!build/*.min.js'])
                .pipe(minify({
                    ext: {
                        src:'.js', // don't touch original file build with babel
                        min:'.min.js'
                    }
                }))
                .pipe(gulp.dest('build'))
});

gulp.task('include_bookmarlet', () => {
    var warning_message =  "<!--\n\n" +
                           "    /!\\ WARNING : THIS FILE HAS BEEN GENERATED /!\\\n\n" +
                           "    Edit src/index.md, then rebuild with gulp.\n\n" +
                           "-->\n\n"

    return  gulp.src('src/index.md')
                .pipe(header(warning_message))
                .pipe(fileinclude({
                    prefix: '@@',
                    basepath: '@file',
                    filters: {
                        escape: function (text) {
                            var map = {
                                '&': '&amp;',
                                '<': '&lt;',
                                '>': '&gt;',
                                '"': '&quot;',
                                "'": '&#039;'
                            };

                            return text.replace(/[&<>"']/g, function(m) { return map[m]; });
                        }
                    }
                }))
                .pipe(gulp.dest('.'));
});

gulp.task('default', gulp.series('assemble', 'compress', 'include_bookmarlet'));
