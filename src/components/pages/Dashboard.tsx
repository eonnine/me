import React from "react";
import { WithMainLayout } from "components/layouts";
import { DashboardTemplate } from "components/templates/layout";
import { values } from "./configs";

function Dashboard() {
  const data = {
    header: {
      profile: values.ProfileValues,
    },
    history: values.historyValues,
    introduce: values.introduceValues,
    style: values.styleValues,
  };
  return <DashboardTemplate {...data} />;
}

export default WithMainLayout(Dashboard);
