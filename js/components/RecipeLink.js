var React = require("react");
var { ListGroupItem } = require("react-bootstrap");

class RecipeLink extends React.Component {

  render() {

    var routeParams = ["recipe", {key: this.props.data.key}];
    var href = this.context.router.makeHref(...routeParams);
    var isActive = this.context.router.isActive(...routeParams);

    return (
      <ListGroupItem href={href} active={isActive}>{this.props.data.title}</ListGroupItem>
    );
  }
}

RecipeLink.contextTypes = {
  router: React.PropTypes.func
};

module.exports = RecipeLink;