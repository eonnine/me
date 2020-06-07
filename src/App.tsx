import React, { Suspense } from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "components/routes";
import { Loading } from "components/atoms/display";
import { Helmet } from "react-helmet";

import "styles/App.scss";

const App = () => {
  return (
    <div className="App">
      <Helmet>
        <title>It's Me</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes />
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default process.env.NODE_ENV === "production" ? App : hot(App);
