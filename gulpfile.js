'use strict';

var gulp = require('gulp');
var jade = require('gulp-jade');
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
// var rjs = require('gulp-requirejs');
var shell = require('gulp-shell');


//======================================
// JSHint
//======================================

gulp.task('jshint', function() {
    return gulp.src([
        'gruntfile.js', 
        '**/*.js', 
        '!src/client/vendor/**/*.js', 
        '!node_modules/**/*.js',
        '!**/*.spec.js'
    ])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});


//======================================
// Less
//======================================

gulp.task('less', function () {
    return gulp.src('./src/client/styles/global.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest('./src/client/styles'));
});


//======================================
// Jade
//======================================

gulp.task('jade', function () {
    return gulp.src([
        './src/client/**/*.jade'
    ])
    .pipe(plumber())
    .pipe(jade())
    .pipe(gulp.dest('./src/client'));
});


//======================================
// RJS Optimize
//======================================
//
// gulp.task('rjs', function() {
//     rjs({
//         baseUrl: './',
//         insertRequire: ['app.js'],
//         mainConfigFile: './core/require-config.js',
//         name: './app.js',
//         out: 'main.js'
//     })
//     .pipe(uglify())
//     .pipe(gulp.dest('_dist'));
// });

//======================================
// Watch
//======================================
 
gulp.task('watch', function () {
    gulp.watch('./**/*.less', ['less']);
    gulp.watch('./**/*.jade', ['jade']);
});


//======================================
// Shell
//======================================

gulp.task('server', ['less', 'jade'], shell.task([ 'npm start' ]));


//======================================
// Primary Tasks
//======================================
gulp.task('default', ['jshint', 'less', 'jade']);
gulp.task('test', ['jshint']);


