import React from "react";
import { ListGroup } from "react-bootstrap";
import RecipeLink from "./RecipeLink";

class RecipeList extends React.Component {

  render() {
    const bcdmap = this.props.data
      .sort( (a, b) => (a.title > b.title ? 1 : -1) )
      .map( (recipe) => <RecipeLink data={recipe} /> );

    return (
      <ListGroup>
        {bcdmap}
      </ListGroup>
    );
  }
}

export default RecipeList;
