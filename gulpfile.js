var gulp = require('gulp');
var $ = require('gulp-load-plugins')();


/**
*   SASS Task 
*/
gulp.task('scss', function(){

    gulp.src('scss/style.scss')
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe($.minifyCss())
        .pipe($.size())
        .pipe(gulp.dest(''));
});


/**
 *   JS Task
 */
gulp.task('js', function(){

    // Jquery first, modules then, app last
    gulp.src(['js/modules/jquery.js', 'js/modules/*.js', '!js/modules/*.min.js', 'js/app.js'])
        .pipe($.uglify())
        .pipe($.concat('app.js'))
        .pipe($.rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest('js'));
});


gulp.task('watch', function(){
    gulp.watch('scss/**', ['scss']);
    gulp.watch('js/app.js', ['js']);
});



gulp.task('default', ['scss', "js"], function(){

});


