import React from "react";
import { atomTypes } from "types";

import "styles/components/atoms/display/Tag.scss";

function Tag(props: atomTypes.TagProps) {
  const { label, color = "", onClick } = props;

  const onClickHandler = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <span className={`tag-container ${color}`} onClick={onClickHandler}>
      {label}
    </span>
  );
}

export default Tag;
