import makeNumeric from "numeric-quantity";
import UnitsOfMeasure from "../constants/UnitsOfMeasure";

function importIngredients(ingText) {

  const arrRawLines = ingText.split("\n");
  const arrLines = arrRawLines.map((line) => line.trim());

  let mnresult = 0;
  let lenNum = 0;
  let arrIngs = [];
  let oIng;

  arrLines.forEach((line) => {

    oIng = {
      qty: 0,
      qty2: 0,
      uom: "",
      desc: "",
      isGroupHeader: false
    };

    //Check if the first character is numeric.
    mnresult = makeNumeric(line.substring(0, 1));

    //If the first character is not numeric, the entire line is the description.
    if (mnresult === -1) {

      oIng.desc = line;

      //If the line ends in ":" or starts with "For ", then it is assumed to be a group header.
      if (oIng.desc.substring(oIng.desc.length - 1) === ":" ||
        oIng.desc.substring(0, 4).toUpperCase() === "FOR ") {

        oIng.isGroupHeader = true;
      }

    //If the first character is numeric, then see how many of the first seven
    //constitute a single value.  This will be qty.
    } else {

      lenNum = 6;
      mnresult = -1;

      while (lenNum > 0 && mnresult === -1) {

        mnresult = makeNumeric( line.substring(0, lenNum).trim() );

        if (mnresult > -1) {
          oIng.qty = mnresult;
          oIng.desc = line.substring(lenNum).trim();
        }

        lenNum--;
      }
    }

    //Now check the description for a qty2 at the beginning.
    //First we look for a dash to indicate a range, then process the next seven
    //characters just like we did for qty.
    let firstChar = oIng.desc.substring(0,1);

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
    let firstSpace = oIng.desc.indexOf(" ");
    let firstWord = oIng.desc.substring(0, firstSpace);

    if (UnitsOfMeasure.indexOf(firstWord) >= 0) {
      oIng.uom = firstWord;
      oIng.desc = oIng.desc.substring(firstSpace + 1);
    }

    arrIngs.push( oIng );
  });

  return arrIngs;
}

export default importIngredients;
