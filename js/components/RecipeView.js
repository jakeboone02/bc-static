var React = require("react");
var Router = require("react-router");
var DocumentTitle = require("react-document-title");
var RecipeIngredientView = require("./RecipeIngredientView");
var IngredientParser = require("./IngredientParser");
var cx = require("react/lib/cx");
var recipes = require("../constants/dataObject");
var { APP_NAME } = require("../constants/config");

class RecipeView extends React.Component {

  render() {
    var recipe = recipes[this.context.router.getCurrentParams().key];

    var documentTitle = recipe.title + " - " + APP_NAME;

    var sourceClassName = cx({"hidden": !recipe.source}),
        subtitleClassName = cx({"hidden": !recipe.subtitle}),
        preptimeClassName = cx({"hidden": !recipe.preptime}),
        yieldClassName = cx({"hidden": !recipe.yield}),
        equipmentClassName = cx({"hidden": !recipe.equipment}),
        directionsClassName = cx({"hidden": !recipe.directions}),
        notesClassName = cx({"hidden": !recipe.notes}),
        ingsClassName = cx({"hidden": !recipe.ingredients.length && !recipe.equipment});

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

module.exports = RecipeView;