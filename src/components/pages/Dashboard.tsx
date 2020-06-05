import React from "react";
import { WithMainLayout } from "components/layouts";
import { DashboardTemplate } from "components/templates/layout";

function Dashboard(props: React.ComponentProps<any>) {
  const state = {
    sider: {
      src: require("assets/imgs/main.jpg"),
    },
  };

  return <DashboardTemplate {...state} />;
}

export default WithMainLayout(Dashboard);
