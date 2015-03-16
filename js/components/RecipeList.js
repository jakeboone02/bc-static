var React = require("react");
var { ListGroup } = require("react-bootstrap");
var RecipeLink = require("./RecipeLink");

var RecipeList = React.createClass({
  render() {
    var bcdmap = this.props.data.map(recipe =>
      <RecipeLink data={recipe} />
    );

    return (
      <ListGroup>
        {bcdmap}
      </ListGroup>
    );
  }
});

module.exports = RecipeList;