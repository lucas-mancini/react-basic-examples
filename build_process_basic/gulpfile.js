var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var react = require('gulp-react');
var htmlreplace = require('gulp-html-replace');

var path = {
    HTML: 'src/index.html',
    ALL: ['src/js/*.js', 'src/js/**/*.js', 'src/index.html'],
    JS: ['src/js/*.js', 'src/js/**/*.js'],
    MINIFIED_OUT: 'build.min.js',
    DEST_SRC: 'dist/src',
    DEST_BUILD: 'dist/build',
    DEST: 'dist'
};

// DEV tasks
// ---------

// transform JSX into JS, and put it in dist/src
gulp.task('transform', function() {
    gulp.src(path.JS)
        .pipe(react())
        .pipe(gulp.dest(path.DEST_SRC));
});

// copy index.html to dist folder
gulp.task('copy', function() {
    gulp.src(path.HTML)
        .pipe(gulp.dest(path.DEST));
});

// watch task to monitor changes
gulp.task('watch', function() {
    gulp.watch(path.ALL, ['transform', 'copy']);
});

// default task
gulp.task('default', ['watch']);

// PRODUCTION tasks
// ----------------

// transform JSX into JS, contact files, uglify them, and put it in dist/build dir
gulp.task('build', function() {
    gulp.src(path.JS)
        .pipe(react())
        .pipe(concat(path.MINIFIED_OUT))
        .pipe(uglify(path.MINIFIED_OUT))
        .pipe(gulp.dest(path.DEST_BUILD));
});

// replace the script tags to reference the minified version of the js file
gulp.task('replaceHTML', function() {
    gulp.src(path.HTML)
        .pipe(htmlreplace({
            'js': 'build/' + path.MINIFIED_OUT
        }))
        .pipe(gulp.dest(path.DEST));
});

// production task to wrap the other two above
gulp.task('production', ['replaceHTML', 'build']);




