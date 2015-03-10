var makeNumeric = require("./makeNumeric");
var trim = require("./trim");
var UnitsOfMeasure = require("../constants/UnitsOfMeasure");

function importIngredients(ingText) {

  var arrRaw = ingText.split("\n");
  var mnresult = 0;
  var lenNum = 0;
  var arrIngs = [];
  var oIng = {};
  var arrRawLen = arrRaw.length;

  for (var a = 0; a < arrRawLen; a++) {
    arrRaw[a] = trim(arrRaw[a]);
  }

  for (var i = 0; i < arrRawLen; i++) {

    oIng = {qty: 0, qty2: 0, uom: "", desc: "", isGroupHeader: false};

    //Check if the first character is numeric.
    mnresult = makeNumeric(arrRaw[i].substring(0, 1));

    //If the first character is not numeric, the entire line is the description.
    if (mnresult === -1) {

      oIng.desc = arrRaw[i];

      //If the line ends in ":" or starts with "For ", then it is assumed to be a group header.
      if (oIng.desc.substring(oIng.desc.length - 1) === ":"
        || oIng.desc.substring(0, 4).toUpperCase() === "FOR ") {

        oIng.isGroupHeader = true;
      }

    //If the first character is numeric, then see how many of the first seven
    //constitute a single value.  This will be qty.
    } else {

      lenNum = 6;
      mnresult = -1;

      while (lenNum > 0 && mnresult === -1) {

        mnresult = makeNumeric(trim(arrRaw[i].substring(0, lenNum)));

        if (mnresult > -1) {
          oIng.qty = mnresult;
          oIng.desc = trim(arrRaw[i].substring(lenNum));
        }

        lenNum--;
      }
    }

    //Now check the description for a qty2 at the beginning.
    //First we look for a dash to indicate a range, then process the next seven
    //characters just like we did for qty.
    var firstChar = oIng.desc.substring(0,1);

    if (/[\u002D|\u2010|\u2011|\u2012|\u2013|\u2014|\u2015]/.test(firstChar)) {

      mnresult = makeNumeric(oIng.desc.substring(1).trim().substring(0, 1));

      if (mnresult != -1) {

        lenNum = 6;
        mnresult = -1;

        while (lenNum > 0 && mnresult === -1) {

          mnresult = makeNumeric(oIng.desc.substring(1, lenNum));

          if (mnresult != -1) {
            oIng.qty2 = mnresult;
            oIng.desc = oIng.desc.substring(lenNum).trim();
          }

          lenNum--;
        }
      }
    }

    //check for a known unit of measure
    var firstSpace = oIng.desc.indexOf(" ");
    var firstWord = oIng.desc.substring(0, firstSpace);

    if (UnitsOfMeasure.indexOf(firstWord) >= 0) {
      oIng.uom = firstWord;
      oIng.desc = oIng.desc.substring(firstSpace + 1);
    }

    arrIngs[i] = oIng;
  }
  
  return arrIngs;
}

module.exports = importIngredients;