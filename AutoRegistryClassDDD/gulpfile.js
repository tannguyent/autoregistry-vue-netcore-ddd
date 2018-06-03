 "use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    sass = require("gulp-sass"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify"),
    runSequence = require('run-sequence');

var pathCompiler = {
    sass: "./scss/**/*.scss"
};

var paths = {
    webroot: "./wwwroot/"
};
paths.distFolder = paths.webroot + "dist/";
paths.cssFolder = paths.webroot + "css/";
paths.jsFolder = paths.webroot + "js/";
paths.distJs = paths.distFolder + "**/*.js";

paths.js = paths.jsFolder + "**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.css = paths.cssFolder + "**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatJsDest = paths.webroot + "js/site.min.js";
paths.concatCssDest = paths.webroot + "css/site.min.css";


gulp.task('default', function () {
    // place code for your default task here
});

gulp.task("clean:js", function (cb) {
    rimraf(paths.jsFolder, cb);
});
gulp.task("clean:dist", function (cb) {
    rimraf(paths.distFolder, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.distJs, cb);
});

gulp.task("clean", ["clean:js", "clean:dist", "clean:css"]);

gulp.task("compiling:ts", function (cb) {
})

gulp.task("compiling:scss", function (cb) {
    return gulp.src(pathCompiler.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.cssFolder));
})

gulp.task("compiling", ["compiling:ts", "compiling:scss"]);

gulp.task("min:js", function () {
    return gulp.src([paths.js, "!" + paths.minJs, paths.distJs], { base: "." })
        .pipe(concat(paths.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task("min:css", function () {
    return gulp.src([paths.css, "!" + paths.minCss])
        .pipe(concat(paths.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);
gulp.task("build", function () {
    return runSequence('clean', 'compiling', 'min');
});