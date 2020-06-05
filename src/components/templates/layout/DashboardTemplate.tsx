import React from "react";
import { Header } from "components/organisms/layout";
import { Profile } from "components/molecules/display";
import { Article } from "components/organisms/layout";
import { templateTypes } from "types";

import "styles/components/templates/layout/DashboardTemplate.scss";

function Dashboard(props: templateTypes.DashboardProps) {
  const { sider, history, introduce, style } = props;

  return (
    <div className="dashboard-template-container">
      <div>
        <Header content={<Profile src={sider.src} />} />
      </div>
      <div className="article-list">
        <div className="row-1">
          <Article title={history.title} sections={history.data} />
          <Article title={introduce.title} sections={introduce.data} />
        </div>
        <div>
          <Article title={style.title} sections={style.data} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
