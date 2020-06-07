import React, { Suspense } from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "components/routes";
import { Loading } from "components/atoms/display";

import "styles/App.scss";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes />
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default process.env.NODE_ENV === "production" ? App : hot(App);
