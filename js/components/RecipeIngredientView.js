var React = require("react");
var formatQtyRange = require("../utilities/formatQtyRange");

class RecipeIngredientView extends React.Component {

  render() {
    var ing = this.props.data;
    var qtyRange = formatQtyRange(ing);
    var ingText = (qtyRange ? qtyRange + " " : "") + (ing.uom ? ing.uom + " " : "") + ing.desc + "\n";

    if (ing.isGroupHeader) {
      return (
        <h4>{ing.desc}</h4>
      );
    } else {
      return (
        <span className="ingredient">{ingText}</span>
      );
    }
  }
}

module.exports = RecipeIngredientView;