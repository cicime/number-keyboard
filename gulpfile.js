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

var option = env => {
  return {
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
  }
};
var write = {
  format: 'iife',
  dest: './dist/keyboard.js',
  sourceMap: 'inline'
}
var cache = {};

var rollupfn = (env)=> {
  console.log('[RO] INGING ...');
  return rollup.rollup(option(env))
      .then(function (bundle) {
        bundle.write(write);
      })
};

var bundleWrite = (bundle) =>{
  console.log('[RD]', 'Writing bundle...')
  cache = bundle;
  bundle.write(write)
};

gulp.task('jade', ()=> {
  return gulp.src('./src/*.jade')
      .pipe(jade({pretty: true}))
      .pipe(gulp.dest('./dist'));
});

gulp.task('styl', ()=> {
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

gulp.task('bulid', ['jade', 'styl'], ()=> {
  return rollupfn('production');
});

gulp.task('dev', ()=> {
  browserSync.init({
    server: "./dist"
  });

  rollup.rollup(option)
      .then(bundleWrite)
      .then(() => {
        gulp.watch('./src/*.js').on('change', ()=> {
          rollup.rollup(Object.assign({}, option(), {cache: cache}))
              .then(bundleWrite)
              .then(browserSync.reload)
        });
      });
  gulp.watch('./src/*.jade', ['jade']);
  gulp.watch('./src/*.styl', ['styl']);
  gulp.watch('./dist/*.(css|html)').on('change', browserSync.reload);
});