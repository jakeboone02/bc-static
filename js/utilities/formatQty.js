function formatQty(sInQty) {

  sQty = sInQty;

  // bomb out
  if (isNaN(sQty)) {

    sQty = "-1";

  } else {

    var iQty = sQty - 0;

    if (iQty === 0) {

        sQty = "";

    } else {

      var iFloor = Math.floor(iQty);
      var sFloor = (iFloor === 0.0 ? "" : iFloor + " ");
      var iDecimal = iQty - iFloor;

      // Handle integers first.  Just the given value
      if (iDecimal === 0) {

        var sQtyString = sInQty + "";
        return sQtyString;
      }

      // Handle infinitely repeating decimals next,
      // since we'll never get an exact match for a case:
      if (iDecimal >= 0.33 && iDecimal <= 0.34) {

        sQty = sFloor + "1/3";

      } else if (iDecimal >= 0.66 && iDecimal <= 0.67) {

        sQty = sFloor + "2/3";

      } else {

        switch (iDecimal) {
          case 0.125: sQty = sFloor + "1/8"; break;
          case 0.2:   sQty = sFloor + "1/5"; break;
          case 0.25:  sQty = sFloor + "1/4"; break;
          case 0.375: sQty = sFloor + "3/8"; break;
          case 0.4:   sQty = sFloor + "2/5"; break;
          case 0.5:   sQty = sFloor + "1/2"; break;
          case 0.6:   sQty = sFloor + "3/5"; break;
          case 0.625: sQty = sFloor + "5/8"; break;
          case 0.75:  sQty = sFloor + "3/4"; break;
          case 0.8:   sQty = sFloor + "4/5"; break;
          case 0.875: sQty = sFloor + "7/8"; break;
        }
      }
    }
  }
  return sQty;
}

module.exports = formatQty;