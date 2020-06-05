import React from "react";
import { DashboardTemplate } from "components/templates/layout";

function Dashboard() {
  const state = {
    sider: {
      src: require("assets/imgs/main.jpg"),
    },
  };

  return <DashboardTemplate {...state} />;
}

export default Dashboard;
