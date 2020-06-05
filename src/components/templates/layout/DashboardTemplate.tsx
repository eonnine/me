import React from "react";
import { Layout, Row, Col } from "antd";
import { Header } from "components/organisms/layout";
import { Profile } from "components/molecules/display";
import { templateTypes } from "types";

function Dashboard(props: templateTypes.DashboardProps) {
  const { sider } = props;

  return (
    <Layout>
      <Header content={<Profile src={sider.src} />} />
      Content
    </Layout>
  );
}

export default Dashboard;
