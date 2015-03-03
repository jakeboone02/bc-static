var React = require("react");
var ListGroup = require("react-bootstrap").ListGroup;
var Link = require("react-router").Link;

var RecipeList = React.createClass({
  render: function() {
    var bcdmap = this.props.data.map(function(v, i, a) {
      return (
        <Link to="recipe" params={{key: v.key}} className="list-group-item">{v.title}</Link>
      );
    });

    return (
      <ListGroup>
        {bcdmap}
      </ListGroup>
    );
  }
});

module.exports = RecipeList;