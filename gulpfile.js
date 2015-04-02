"use strict";

var del = require("del");
var gulp = require("gulp");
var data = require("./js/constants/data.js")
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var data2obj = require("./js/constants/data2obj");
var transform = require("vinyl-transform");
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
  var browserified = transform(function(filename) {
    var b = browserify(filename);
    return b.bundle();
  });

  return gulp.src("./js/main.js")
    .pipe(browserified)
    .pipe(rename({ basename: "bundle" }))
    .pipe(gulp.dest("./js/"))
    .pipe(rename({ extname: ".min.js" }))
    .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify())
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./js/"));
});

gulp.task("default", ["js"]);