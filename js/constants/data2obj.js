var data = require("./data");
var fs = require("fs");
var result = {};

// for (var i = 0, len = data.length; i < len; i++) {
data.forEach(function(v, i, a) {
  result[v.key] = v;
});

fs.writeFile("./dataObject.js", "module.exports = " + JSON.stringify(result) + ";", function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
});

