"use strict";

var del = require("del");
var gulp = require("gulp");
var data = require("./js/constants/data.js");
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var data2obj = require("./js/constants/data2obj");
var babelify = require("babelify");
var sourcemaps = require("gulp-sourcemaps");
var browserify = require("browserify");
var packageJSON = require("./package.json");

// var getBundleName = function () {
//   var version = packageJSON.version;
//   var name = packageJSON.name;
//   return version + "." + name + "." + "min";
// };

gulp.task("clean:js", function(cb) {
  del(["js/bundle.*"], cb);
});

gulp.task("data2obj", ["clean:js"], function(cb) {
  data2obj.run(data, "./js/constants/dataObject.js");
  cb();
});

gulp.task("js", ["clean:js", "data2obj"], function () {
  var b = browserify({
    entries: "./js/main.js",
    debug: true,
    transform: [babelify]
  });

  return b.bundle()
    .pipe(source("bundle.js"))
    .pipe(buffer())
    .pipe(gulp.dest("./js/"))
    .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify())
      .pipe(rename({ extname: ".min.js" }))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./js/"));
});

gulp.task("default", ["js"]);
