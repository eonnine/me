import React from "react";
import { Tag } from "components/atoms/display";
import { moleculeTypes } from "types";

import "styles/components/molecules/display/Step.scss";
import { atomTypes } from "types";

function Step(props: moleculeTypes.StepProps) {
  const { label, title, tags, link, content } = props;

  const tagElements = tags.map((tag: atomTypes.TagProps, idx: number) => {
    return <Tag key={idx} label={tag.label} color={tag.color} />;
  });

  const openNewWindow = (url: string) => {
    const newWindow = window.open(url, "_blank");
    if (newWindow) {
      newWindow.focus();
    }
  };

  const linkTagElement = link ? (
    <Tag label="github" onClick={() => openNewWindow(link)} color="red" />
  ) : null;

  return (
    <div className="step-container">
      <div className="step-tail" />
      <div className="step-icon">
        <h5>{label}</h5>
      </div>
      <div className="step-content">
        <h3>
          {title} {linkTagElement}
        </h3>
        <div>{tagElements}</div>
        <pre>{content}</pre>
      </div>
    </div>
  );
}

export default Step;
