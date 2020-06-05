import React from "react";
import { atomTypes } from "types";

import "styles/components/atoms/display/Icon.scss";

function Icon(props: atomTypes.IconProps) {
  return (
    <i className="icon-container">
      <img {...props} className="icon" />
    </i>
  );
}

export default Icon;
