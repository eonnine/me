import React from "react";
import { hot } from "react-hot-loader/root";

import Router from "components/utils/Router";

import "styles/App.scss";

const App = () => {
  return (
    <div className="App">
      <img
        src={require("assets/imgs/main.jpg")}
        style={{ width: "100vw", height: "37vh" }}
      />
      <Router />
    </div>
  );
};

export default process.env.NODE_ENV === "production" ? App : hot(App);
