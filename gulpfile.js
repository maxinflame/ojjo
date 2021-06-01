const gulp = require('gulp');
const sass = require("gulp-sass");

// styles

const styles = () => {
    return gulp.src("sass/style.scss")
    .pipe(sass())
    .pipe(gulp.dest("css/"))
}

exports.styles = styles;

// Watcher

const watcher = () => {
  gulp.watch("sass/**/*.scss", gulp.series(styles));
}

exports.watcher = watcher;
