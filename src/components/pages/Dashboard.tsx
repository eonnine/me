import React from "react";
import { WithMainLayout } from "components/layouts";
import { DashboardTemplate } from "components/templates/layout";
import { values } from "./configs";

const makeIntroduceSectionRender = ({ key }: { key: string }) => {
  switch (key) {
    case "introduce":
      return <h2>안녕하세요.</h2>;
    case "skill":
      return <h2>Skill</h2>;
    case "style":
      return <h2>Style</h2>;
    default:
      return <></>;
  }
};

function Dashboard(props: React.ComponentProps<any>) {
  const data = {
    sider: {
      src: require("assets/imgs/main.jpg"),
    },
    history: {
      title: "History",
      data: [],
    },
    introduce: values.introduceValues,
    style: {
      title: "Style",
      data: [],
    },
  };

  return <DashboardTemplate {...data} />;
}

export default WithMainLayout(Dashboard);
