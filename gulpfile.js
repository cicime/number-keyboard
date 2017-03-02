var gulp = require('gulp'),
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    autoprefixer = require('gulp-autoprefixer'),
    babel = require('rollup-plugin-babel'),
    resolve = require('rollup-plugin-node-resolve'),
    commonjs = require('rollup-plugin-commonjs'),
    replace = require('rollup-plugin-replace'),
    uglify = require('rollup-plugin-uglify'),
    progress = require('rollup-plugin-progress'),
    rollup = require('rollup'),
    browserSync = require('browser-sync').create();

var rollupfn = function (env) {
  console.log('[RO] INGING ...');
  return rollup.rollup({
    entry: './src/main.js',
    plugins: [
      babel({
        exclude: './node_modules/**'
      }),
      commonjs(),
      resolve({
        jsnext: true,
        main: true,
        browser: !env
      }),
      progress({
        clearLine: false
      }),
      replace({
        ENV: JSON.stringify(env || 'development')
      }),
      (env === 'production' && uglify())
    ]
  })
      .then(function (bundle) {
        bundle.write({
          format: 'iife',
          dest: './dist/keyboard.js',
          sourceMap: 'inline'
        });
      })
};

gulp.task('jade', function () {
  return gulp.src('./src/*.jade')
      .pipe(jade({pretty: true}))
      .pipe(gulp.dest('./dist'));
});

gulp.task('styl', function () {
  return gulp.src('./src/*.styl')
      .pipe(stylus({
        compress: true
      }))
      .pipe(autoprefixer({
        browsers: ['last 5 versions', 'Android >= 4.0']
      }))
      .pipe(gulp.dest('./dist'));
});


// ------------------------------------------------------------

gulp.task('bulid', ['jade', 'styl'], function () {
  return rollupfn('production');
});

gulp.task('dev', function () {
  browserSync.init({
    server: "./dist"
  });
  // gulp.watch('./src/*.js', rollupfn());
  gulp.watch('./src/*.jade', ['jade']);
  gulp.watch('./src/*.styl', ['styl']);
});