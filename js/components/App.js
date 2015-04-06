import React from "react";
import { RouteHandler } from "react-router";
import { Row, Col } from "react-bootstrap";
import DocumentTitle from "react-document-title";
import RecipeList from "./RecipeList";
import RecipeView from "./RecipeView";
import recipes from "../constants/dataObject";
import { APP_NAME } from "../constants/config";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { recipes };
  }

  render() {

    const recipeArray = Object.keys(this.state.recipes).map(k => this.state.recipes[k]);

    return (
      <DocumentTitle title={APP_NAME}>
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
}

export default App;
