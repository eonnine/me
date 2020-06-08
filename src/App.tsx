import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import { Routes } from "components/routes";

import "styles/App.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Routes />
      </Switch>
    </BrowserRouter>
  );
}

export default process.env.NODE_ENV === "production" ? App : hot(App);
