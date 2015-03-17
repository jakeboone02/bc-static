var React = require("react");
var DocumentTitle = require("react-document-title");
var { APP_NAME } = require("../constants/config");

class RecipeRouteNotFound extends React.Component {

  render() {
    return (
      <DocumentTitle title={"Recipe not found - " + APP_NAME}>
        <p>Recipe {this.props.id} not found :(</p>
      </DocumentTitle>
    );
  }
}

module.exports = RecipeRouteNotFound;