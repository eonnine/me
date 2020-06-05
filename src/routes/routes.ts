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
    children: [
      {
        path: "introduce",
        component: "",
        meta: {
          navigation: {
            show: true,
          },
        },
      },
      {
        path: "resume",
        component: "",
        meta: {
          navigation: {
            show: true,
          },
        },
      },
      {
        path: "contact",
        component: "",
        meta: {
          navigation: {
            show: true,
          },
        },
      },
    ],
  },
];

export { routes };
