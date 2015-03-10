var trim = require("./trim.js");

function makeNumeric(qtyString) {

  var finalResult = -1;

  var qty = qtyString
    .replace(/\u00BC/g, "1/4")
    .replace(/\u00BD/g, "1/2")
    .replace(/\u00BE/g, "3/4")
    .replace(/\u2150/g, "1/7")
    .replace(/\u2151/g, "1/9")
    .replace(/\u2152/g, "1/10")
    .replace(/\u2153/g, "1/3")
    .replace(/\u2154/g, "2/3")
    .replace(/\u2155/g, "1/5")
    .replace(/\u2156/g, "2/5")
    .replace(/\u2157/g, "3/5")
    .replace(/\u2158/g, "4/5")
    .replace(/\u2159/g, "1/6")
    .replace(/\u215A/g, "5/6")
    .replace(/\u215B/g, "1/8")
    .replace(/\u215C/g, "3/8")
    .replace(/\u215D/g, "5/8")
    .replace(/\u215E/g, "7/8");

  var sQty = trim(qty);
  var re = /^(\d*)(\.\d+|(\s+\d*\s*)?\s*\/\s*\d+)?$/

  if (sQty.search(re) >= 0) {

    var fractionArray,
        ar = re.exec(sQty),
        n = 0,
        d = 0;

    finalResult = ar[1] - 0;

    if (ar[2] != null) {

      if (ar[2].search(/^\./) != -1) {

        n = ("0" + ar[2]) - 0
        finalResult += Math.round(n*1000)/1000;

      } else if (ar[2].search(/^\s*\//) != -1) {

        n = ar[1] - 0;
        d = ar[2].replace(/\//g, "") - 0;
        finalResult = Math.round((n * 1000) / d) / 1000;

      } else {

        fractionArray = ar[2].split("\/");
        n = (fractionArray[0] - 0);
        d = (fractionArray[1] - 0);
        finalResult += Math.round((n * 1000) / d) / 1000;

      }
    }
  }

  return finalResult;
}

module.exports = makeNumeric;