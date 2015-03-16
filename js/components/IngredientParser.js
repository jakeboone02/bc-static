var React = require("react");
var { Button, Input } = require("react-bootstrap");
var parseIngredients = require("../utilities/parseIngredients");

var IngredientParser = React.createClass({
  render() {
    return (
      <form key={"form-" + this.props.data.key}>
        <Input type="textarea" id="ingparsetextarea" rows="14" defaultValue={this.props.data.directions} />
        <Button onClick={this.parseIngs}>Parse Ingredients</Button>
      </form>
    );
  }, 

  parseIngs() {
    console.log(JSON.stringify(parseIngredients(document.getElementById("ingparsetextarea").value)));
  }
});

module.exports = IngredientParser;
