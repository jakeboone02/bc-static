var React = require("react");
var { ListGroup } = require("react-bootstrap");
var RecipeLink = require("./RecipeLink");

class RecipeList extends React.Component {

  render() {
    var bcdmap = this.props.data
    .sort( (a, b) => (a.title > b.title ? 1 : -1) )
    .map( recipe => <RecipeLink data={recipe} /> );

    return (
      <ListGroup>
        {bcdmap}
      </ListGroup>
    );
  }
}

module.exports = RecipeList;