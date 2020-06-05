import React from "react";
import { Card } from "components/atoms/display";
import { Profile, Section } from "components/molecules/display";
import { Header, Article } from "components/organisms/layout";
import { templateTypes } from "types";

import "styles/components/templates/layout/DashboardTemplate.scss";

function Dashboard(props: templateTypes.DashboardProps) {
  const { sider, history, introduce, style } = props;

  const introduceData = introduce.data.map((item) => {
    if (item.key === "skill") {
      return {
        ...item,
        section: item.list.map((subItem: templateTypes.SectionValues) => {
          return (
            <div key={subItem.key}>
              <Section
                sub={false}
                h={4}
                title={subItem.title}
                content={
                  <div>
                    {subItem.items.map((skill: templateTypes.Skill) => (
                      <Card
                        key={skill.key}
                        label={skill.label}
                        body={<img src={skill.img} />}
                      />
                    ))}
                  </div>
                }
              />
            </div>
          );
        }),
      };
    }
    return item;
  });

  return (
    <div className="dashboard-template-container">
      <div>
        <Header content={<Profile src={sider.src} />} />
      </div>
      <div className="article-list">
        <div className="divide-row">
          <Article title={history.title} sections={history.data} />
          <Article title={introduce.title} sections={introduceData} />
        </div>
        <div>
          <Article title={style.title} sections={style.data} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
