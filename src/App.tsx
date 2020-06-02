import React from "react";
import { hot } from "react-hot-loader/root";

import "styles/App.scss";

function App() {
  return <div className="App">Me</div>;
}

export default process.env.NODE_ENV === "production" ? App : hot(App);
