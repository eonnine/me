import React from "react";
import { Title } from "components/atoms/display";
import { Icon } from "components/atoms/display";
import { moleculeTypes } from "types";

import "styles/components/molecules/display/Section.scss";

function Section(props: moleculeTypes.SectionProps) {
  const { sub = true, title, icon = "", content, h = 3 } = props;

  return (
    <section className="section-container">
      {title ? (
        <Title sub={sub} h={h} value={title} prefix={<Icon src={icon} />} />
      ) : null}
      <div className="content">{content}</div>
    </section>
  );
}

export default Section;
