var React = require("react");
var { Button, Input } = require("react-bootstrap");
var parseIngredients = require("../utilities/parseIngredients");

class IngredientParser extends React.Component {

  constructor() {
    this.parseIngs = () => {
      console.log(JSON.stringify(parseIngredients(document.getElementById("ingparsetextarea").value)));
    }
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

module.exports = IngredientParser;
