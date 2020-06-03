import React from "react";
import { Route, RouteComponentProps } from "react-router-dom";
import { routeTypes } from "types";

function RouteWithSubRoutes(route: routeTypes.IRoute) {
  return (
    <Route
      path={route.path}
      render={(props: RouteComponentProps) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.children} />
      )}
    />
  );
}

export default RouteWithSubRoutes;
