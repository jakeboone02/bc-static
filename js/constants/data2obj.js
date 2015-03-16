var fs = require("fs");

function run(data, destination) {
  var result = {};

  data.forEach(function(v, i, a) {
    result[v.key] = v;
  });

  fs.writeFile(destination, "module.exports = " + JSON.stringify(result) + ";", function(err) {
      if(err) {
          console.log(err);
      } else {
          console.log("data2obj successful");
      }
  });
}

module.exports = {run: run};
