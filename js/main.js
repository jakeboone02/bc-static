import React from "react";
import Router from "react-router";
import RecipeRouteNotFound from "./components/RecipeRouteNotFound";
import App from "./components/App";
import Index from "./components/Index";
import RecipeView from "./components/RecipeView";

const { Route, DefaultRoute, NotFoundRoute } = Router;

const routes =
  <Route handler={App} path="/">
    <DefaultRoute handler={Index} />
    <Route name="recipe" path="/recipe/:key" handler={RecipeView} />
    <NotFoundRoute handler={RecipeRouteNotFound} />
  </Route>
;

Router.run(routes, Handler => React.render(<Handler />, document.getElementById("app")) );
