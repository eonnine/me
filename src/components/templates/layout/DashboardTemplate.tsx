import React from "react";
import { Card, Tag } from "components/atoms/display";
import { Profile, Section, Step } from "components/molecules/display";
import { Header, Article } from "components/organisms/layout";
import { moleculeTypes, templateTypes } from "types";

import "styles/components/templates/layout/DashboardTemplate.scss";

function Dashboard(props: templateTypes.DashboardProps) {
  const { sider, history, introduce, style } = props;

  const historySections = history.data.map((item) => {
    const {
      label,
      title,
      tags,
      link,
      content,
    } = item.project as moleculeTypes.StepProps;
    return {
      ...item,
      section: (
        <div>
          <Step
            label={label}
            title={title}
            link={link}
            tags={tags}
            content={content}
          />
        </div>
      ),
    };
  });

  const introduceSections = introduce.data.map((item) => {
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
                        body={<img src={skill.img} alt="" />}
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
          <Article title={history.title} sections={historySections} />
          <Article title={introduce.title} sections={introduceSections} />
        </div>
        <div>
          <Article title={style.title} sections={style.data} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
