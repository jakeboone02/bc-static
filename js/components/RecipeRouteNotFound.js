var React = require("react");

var RecipeRouteNotFound = React.createClass({
  render: function () {
    return <p>Recipe {this.props.id} not found :(</p>;
  }
});

module.exports = RecipeRouteNotFound;