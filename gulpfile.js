var gulp = require("gulp"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    sass = require("gulp-sass"),
    cleanCSS = require("gulp-clean-css");

gulp.task("devjs", function () {
    gulp.src([
        "node_modules/jquery/dist/jquery.js",
        "node_modules/bootstrap/dist/js/*.min.js",
        "src/js/vendor/*.js",
        "src/js/*.js"])
    .pipe(concat("public.js"))
    .pipe(uglify())
    .pipe(gulp.dest("public/assets/js/"))
});

gulp.task("devcss", function(){
    gulp.src([
        "node_modules/bootstrap/dist/css/*.min.css",
        "src/sass/*.scss"])
    .pipe(sass().on('error', sass.logError))
    .pipe(concat("public.css"))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest("public/assets/css/"));
});

gulp.task('dev', ['devcss', 'devjs']);