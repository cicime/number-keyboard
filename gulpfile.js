var gulp = require('gulp'),
    babel = require('rollup-plugin-babel'),
    rollup = require('rollup');

var rollupfn = function () {
  return rollup.rollup({
    entry: './src/keyboard.js',
    plugins: [babel()]
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