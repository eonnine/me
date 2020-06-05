import React from "react";
import { WithMainLayout } from "components/layouts";
import { DashboardTemplate } from "components/templates/layout";
import { values } from "./configs";

function Dashboard(props: React.ComponentProps<any>) {
  const data = {
    sider: {
      src: require("assets/imgs/main.jpg"),
    },
    history: {
      title: "History",
      data: [],
    },
    introduce: {
      title: values.introduceValues.title,
      data: values.introduceValues.sections.map((sectionValue) => {
        return {
          ...sectionValue,
          section: <p>RenderItem</p>,
        };
      }),
    },
    style: {
      title: "Style",
      data: [],
    },
  };

  return <DashboardTemplate {...data} />;
}

export default WithMainLayout(Dashboard);
