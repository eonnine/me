import { lazy } from "react";

const routes = [
  {
    path: "/",
    component: lazy(() => import("components/pages/Dashboard")),
    meta: {
      navigation: {
        show: true,
      },
    },
  },
];

export { routes };
