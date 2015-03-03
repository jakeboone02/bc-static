var React = require("react");
var RouteHandler = require("react-router").RouteHandler;
var { Row, Col } = require("react-bootstrap");
var RecipeList = require("./RecipeList");
var RecipeView = require("./RecipeView");
var recipes = require("../constants/dataObject");

var App = React.createClass({
  getInitialState: function () {
    return { recipes: recipes };
  },

  render: function() {

    var recipeArray = Object.keys(recipes).map(function(k) {
      return recipes[k];
    });

    return (
      <Row>
        <Col smPush={4} sm={8}>
          <RouteHandler />
        </Col>
        <Col smPull={8} sm={4}>
          <RecipeList data={recipeArray} />
        </Col>
      </Row>
    );
  }
});

module.exports = App;