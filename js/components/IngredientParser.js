import React from "react";
import { Button, Input } from "react-bootstrap";
import parseIngredients from "../utilities/parseIngredients";

class IngredientParser extends React.Component {

  constructor() {
    super();

    this.parseIngs = () => {
      console.log(JSON.stringify(parseIngredients(document.getElementById("ingparsetextarea").value)));
    };
  }

  render() {
    return (
      <form key={"form-" + this.props.data.key}>
        <Input type="textarea" id="ingparsetextarea" rows="14" defaultValue={this.props.data.directions} />
        <Button onClick={this.parseIngs}>Parse Ingredients</Button>
      </form>
    );
  }
}

export default IngredientParser;
