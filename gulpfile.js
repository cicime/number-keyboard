var gulp = require('gulp'),
    jade = require('gulp-jade'),
    babel = require('rollup-plugin-babel'),
    resolve = require('rollup-plugin-node-resolve'),
    commonjs = require('rollup-plugin-commonjs'),
    replace = require('rollup-plugin-replace'),
    uglify = require('rollup-plugin-uglify'),
    progress = require('rollup-plugin-progress'),
    rollup = require('rollup');

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


// ------------------------------------------------------------

gulp.task('bulid',['jade'], function () {
  return rollupfn('production');
});

gulp.task('dev', function () {
  gulp.watch('./src/*.js', rollupfn());
  gulp.watch('./src/*.jade', ['jade']);
});