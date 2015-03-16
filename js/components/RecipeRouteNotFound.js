var React = require("react");
var DocumentTitle = require("react-document-title");

var RecipeRouteNotFound = React.createClass({
  render() {
    return (
      <DocumentTitle title="Not found">
        <p>Recipe {this.props.id} not found :(</p>
      </DocumentTitle>
    );
  }
});

module.exports = RecipeRouteNotFound;