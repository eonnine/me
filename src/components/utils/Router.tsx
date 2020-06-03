import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { routes } from "routes";
import { IRoute } from "types/RouteTypes";
import RouteWithSubRoutes from "./RouteWithSubRoutes";

function Router() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          {routes.map((route: IRoute, i: number) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Router;
