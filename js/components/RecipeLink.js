import React from "react";
import { ListGroupItem } from "react-bootstrap";

class RecipeLink extends React.Component {

  render() {

    const routeParams = ["recipe", {key: this.props.data.key}];
    const href = this.context.router.makeHref(...routeParams);
    const isActive = this.context.router.isActive(...routeParams);

    return (
      <ListGroupItem href={href} active={isActive}>{this.props.data.title}</ListGroupItem>
    );
  }
}

RecipeLink.contextTypes = {
  router: React.PropTypes.func
};

export default RecipeLink;
