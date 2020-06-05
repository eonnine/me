import React from "react";
import { Switch } from "react-router-dom";
import { routes } from "routes";
import { IRoute } from "types/RouteTypes";
import RouteWithSubRoutes from "./RouteWithSubRoutes";

function Router() {
  return (
    <Switch>
      {routes
        .filter((route) => route.meta.navigation.show)
        .map((route: IRoute, i: number) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
    </Switch>
  );
}

export default Router;
