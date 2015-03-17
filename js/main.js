var React = require("react");
var Router = require("react-router")
var { Route, DefaultRoute, NotFoundRoute } = Router;
var RecipeRouteNotFound = require("./components/RecipeRouteNotFound");
var App = require("./components/App");
var Index = require("./components/Index");
var RecipeView = require("./components/RecipeView");
var RecipeRouteNotFound = require("./components/RecipeRouteNotFound");

var routes =
  <Route handler={App} path="/">
    <DefaultRoute handler={Index} />
    <Route name="recipe" path="/recipe/:key" handler={RecipeView} />
    <NotFoundRoute handler={RecipeRouteNotFound} />
  </Route>
;

Router.run(routes, Handler => React.render(<Handler />, document.getElementById("app")) );
