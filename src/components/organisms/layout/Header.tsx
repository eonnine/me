import React from "react";
import { organismTypes } from "types";

import "styles/components/organisms/layout/Header.scss";

function Horizontal(props: organismTypes.HorizontalProps) {
  const { content } = props;
  return <div className="header-container">{content}</div>;
}

export default Horizontal;
