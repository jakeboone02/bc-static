var React = require("react");
// var { ListGroupItem } = require('react-bootstrap');
var { Link } = require("react-router");

var RecipeLink = React.createClass({
  render() {
    return (
      // <ListGroupItem href="#">{this.props.data.title}</ListGroupItem>
      <Link to="recipe" params={{key: this.props.data.key}} className="list-group-item">{this.props.data.title}</Link>
    );
  }
});

module.exports = RecipeLink;