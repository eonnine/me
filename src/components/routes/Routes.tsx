import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import { routes } from "routes";
import { Loading } from "components/atoms/display";
import { routeTypes } from "types";

function Routes() {
  return (
    <Suspense fallback={<Loading />}>
      {routes
        .filter((route) => route.meta.navigation.show)
        .map((route: routeTypes.Route) => (
          <Route
            key={route.path}
            path={route.path}
            render={() => <route.component route={route} />}
          />
        ))}
    </Suspense>
  );
}

export default Routes;
