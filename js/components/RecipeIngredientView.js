var React = require("react");
var formatQtyRange = require("../utilities/formatQtyRange");

var RecipeIngredientView = React.createClass({
  render: function() {

    var ing = this.props.data;
    var qtyRange = formatQtyRange(ing);

    if (ing.isGroupHeader) {
      return (
        <h4>{ing.desc}</h4>
      );
    } else {
      return (
        <div className="ingredient">{qtyRange} {ing.uom} {ing.desc}</div>
      );
    }
  }
});

module.exports = RecipeIngredientView;