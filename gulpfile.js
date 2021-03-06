const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const jsFiles = ['*.js', 'src/**/*.js'];

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

gulp.task('serve', ['inject'], () => {
    const options = {
        script: 'app.js',
        delayTime: 3,
        env: {
            'PORT': 8000
        },
        watch: jsFiles
    };

    return nodemon(options)
        .on('restart', ev => {
            console.log('Restarting server...');
        });
});
