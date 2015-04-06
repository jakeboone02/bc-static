import React from "react";
import Router from "react-router";
import DocumentTitle from "react-document-title";
import RecipeIngredientView from "./RecipeIngredientView";
import IngredientParser from "./IngredientParser";
import classnames from "classnames";
import recipes from "../constants/dataObject";
import { APP_NAME } from "../constants/config";

class RecipeView extends React.Component {

  render() {
    var recipe = recipes[this.context.router.getCurrentParams().key];

    var documentTitle = recipe.title + " - " + APP_NAME;

    var sourceClassName = classnames({"hidden": !recipe.source});
    var subtitleClassName = classnames({"hidden": !recipe.subtitle});
    var preptimeClassName = classnames({"hidden": !recipe.preptime});
    var yieldClassName = classnames({"hidden": !recipe.yield});
    var equipmentClassName = classnames({"hidden": !recipe.equipment});
    var directionsClassName = classnames({"hidden": !recipe.directions});
    var notesClassName = classnames({"hidden": !recipe.notes});
    var ingsClassName = classnames({"hidden": !recipe.ingredients.length && !recipe.equipment});

    var ings = recipe.ingredients.map(v =>
      <RecipeIngredientView data={v} />
    );

    return (
      <DocumentTitle title={documentTitle}>
        <article className="recipe">
          <header>
            <div className="recipe-title-block">
              <h2 className="recipe-title">{recipe.title}</h2>
              <div className={subtitleClassName}>
                <em>{recipe.subtitle}</em>
              </div>
            </div>
            <div className={sourceClassName}>From: {recipe.source}</div>
            <div className={preptimeClassName}>Prep time: {recipe.preptime}</div>
            <div className={yieldClassName}>Yield: {recipe.yield}</div>
          </header>
          <div className={ingsClassName}>
            <h3 className="recipe-section-header">Ingredients</h3>
            <div className="text-ws-pre-wrap">
              {ings}
              <div className={equipmentClassName}>
                <h4>Special Equipment</h4>
                <div>{recipe.equipment}</div>
              </div>
            </div>
          </div>
          <div className={directionsClassName}>
            <h3 className="recipe-section-header">Preparation</h3>
            <div className="text-ws-pre-wrap">{recipe.directions}</div>
          </div>
          <div className={notesClassName}>
            <h3 className="recipe-section-header">Notes</h3>
            <div className="text-ws-pre-wrap">{recipe.notes}</div>
          </div>
          {/* <IngredientParser data={recipe} /> */}
        </article>
      </DocumentTitle>
    );
  }
}

RecipeView.contextTypes = {
  router: React.PropTypes.func
};

export default RecipeView;
