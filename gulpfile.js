const gulp = require('gulp');

gulp.task('inject', () => {
    const wiredep = require('wiredep').stream;
    const inject = require('gulp-inject');
    const injectSrc = gulp.src([
        './public/css/*.css',
        './public/js/*.js'],
        {read: false}
    );
    const injectOptions = {
        ignorePath: '/public/'
    };

    const wiredepOptions = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../../public/'
    };

    return gulp.src('./src/views/*.html')
        .pipe(wiredep(wiredepOptions))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views'));
});
