import gulp from 'gulp';
import shell from 'gulp-shell';

gulp.task('start', shell.task('parcel serve index.html'));
gulp.task('test', shell.task('mocha'));
gulp.task('cypress', shell.task('npx cypress run'));

gulp.task('run', gulp.parallel('start', gulp.series('test', 'cypress'))); //Cypress has to wait for the server to be running
