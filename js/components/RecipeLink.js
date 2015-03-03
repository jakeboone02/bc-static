var React = require("react");
var ListGroupItem = require('react-bootstrap').ListGroupItem;

var RecipeLink = React.createClass({
  render: function() {
    return (
      <ListGroupItem href="#" onClick={this.onClick} active={this.props.i === 18}>{this.props.data.title}</ListGroupItem>
    );
  },
  onClick: function() {
    alert(this.props.data.title);
  }
});

module.exports = RecipeLink;