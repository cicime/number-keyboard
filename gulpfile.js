var gulp = require('gulp'),
    rollup = require('rollup');

var rollupfn = function () {
  return rollup.rollup({
    entry: './src/keyboard.js'
  })
      .then(function (bundle) {
        bundle.write({
          format: 'iife',
          dest: './dist/keyboard.js',
          sourceMap: true
        });
      })
};

gulp.task('build', function () {
  return rollupfn();
});