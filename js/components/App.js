var React = require("react");
var { RouteHandler } = require("react-router");
var { Row, Col } = require("react-bootstrap");
var DocumentTitle = require("react-document-title");
var RecipeList = require("./RecipeList");
var RecipeView = require("./RecipeView");
var recipes = require("../constants/dataObject");
var config = require("../constants/config");

var App = React.createClass({
  getInitialState() {
    return { recipes };
  },

  render() {

    var recipeArray = Object.keys(this.state.recipes).map(k => this.state.recipes[k]);

    return (
      <DocumentTitle title={config.APP_NAME}>
        <Row>
          <Col smPush={4} sm={8}>
            <RouteHandler />
          </Col>
          <Col smPull={8} sm={4}>
            <RecipeList data={recipeArray} />
          </Col>
        </Row>
      </DocumentTitle>
    );
  }
});

module.exports = App;