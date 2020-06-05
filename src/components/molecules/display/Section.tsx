import React from "react";
import { Title } from "components/atoms/entry";
import { Icon } from "components/atoms/display";

import "styles/components/molecules/display/Section.scss";

function Section(props: any) {
  const { title, icon, content } = props;

  return (
    <section className="section-container">
      <Title sub={true} value={title} prefix={<Icon src={icon} />} />
      <div className="content">{content}</div>
    </section>
  );
}

export default Section;
