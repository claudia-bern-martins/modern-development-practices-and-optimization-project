import gulp from "gulp";
import shell from "gulp-shell";

gulp.task("start", shell.task("parcel serve index.html"));
gulp.task("test", shell.task("mocha"));
