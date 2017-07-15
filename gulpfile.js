const gulp = require('gulp');

const concat = require("gulp-concat");
const uglify = require('gulp-uglify');
const del = require('del');
const minifyCss = require("gulp-minify-css");



const paths = {
    js: {
        vendor: ["./src/js/vendor/*.js"],
        src: ["./src/app/lib/*.js","./src/app/app.js", "./src/app/settings/*.js", "./src/app/services/*.js", "./src/app/directives/*.js"
            , "./src/app/components/*.js", "./src/app/controllers/*.js", "./src/js/*.js"],
        dest: "./dist/js/"
    },
    css: {
        vendor: ["./src/css/vendor/*.css"],
        src: ["./src/css/*.css"],
        dest: "./dist/css/"
    },
    fonts: {
        src: ["./src/fonts/*"],
        dest: "./dist/fonts/"
    },

    views: {
        src: ["./src/views/*"],
        dest: "./dist/views/"
    }

};




gulp.task('views', function () {
    gulp.src(paths.views.src)
        .pipe(gulp.dest(paths.views.dest))
});

gulp.task('fonts', function () {
    gulp.src(paths.fonts.src)
        .pipe(gulp.dest(paths.fonts.dest))
});

gulp.task('vendor-css', function () {
    gulp.src(paths.css.vendor)
        .pipe(gulp.dest(paths.css.dest))
});

gulp.task('css', ['vendor-css', 'fonts'], function () {
    gulp.src(paths.css.src)
        .pipe(concat("style.min.css"))
        .pipe(minifyCss())
        .pipe(gulp.dest(paths.css.dest));
});

gulp.task('vendor-js', function () {
    return gulp.src(paths.js.vendor)
        .pipe(gulp.dest(paths.js.dest));
});

gulp.task('js', ['vendor-js'], function () {
    return gulp.src(paths.js.src)
        .pipe(concat("app.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest(paths.js.dest));
});



// Rerun the task when a file changes
gulp.task('watch', function () {
    gulp.watch(paths.js.vendor, ['js']);
    gulp.watch(paths.js.src, ['js']);
    gulp.watch(paths.css.src, ['css']);
    gulp.watch(paths.views.src, ['views']);
    console.log("gulp is watching your files ");
});

// The default task (called when you run `gulp` from cli)

// 'watch', 'images',
gulp.task('default', ['views', 'css', 'js']);