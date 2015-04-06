import React from "react";
import DocumentTitle from "react-document-title";
import { APP_NAME } from "../constants/config";

class RecipeRouteNotFound extends React.Component {

  render() {
    return (
      <DocumentTitle title={"Recipe not found - " + APP_NAME}>
        <p>Recipe {this.props.id} not found :(</p>
      </DocumentTitle>
    );
  }
}

export default RecipeRouteNotFound;
