const routes = [
  {
    path: "/home",
    redirect: "",
    component: "",
    children: [],
  },
  {
    path: "/dashboard",
    component: "",
    children: [
      {
        path: "introduce",
        component: "",
      },
      {
        path: "resume",
        component: "",
      },
      {
        path: "contact",
        component: "",
      },
    ],
  },
];

export { routes };
