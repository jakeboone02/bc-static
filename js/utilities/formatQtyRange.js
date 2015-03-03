var formatQty = require("./formatQty");

function formatQtyRange(ing) {
  return formatQty(ing.qty) + (ing.qty2 > 0 ? (ing.qty === 0 ? "0" : "") + " ‒ " + formatQty(ing.qty2) : "");
}

module.exports = formatQtyRange;