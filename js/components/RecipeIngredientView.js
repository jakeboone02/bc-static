import React from "react";
import formatQtyRange from "../utilities/formatQtyRange";

class RecipeIngredientView extends React.Component {

  render() {
    const ing = this.props.data;
    const qtyRange = formatQtyRange(ing);
    const ingText = (qtyRange ? qtyRange + " " : "") + (ing.uom ? ing.uom + " " : "") + ing.desc + "\n";

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

export default RecipeIngredientView;
