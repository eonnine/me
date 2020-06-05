import React from "react";
import { atomTypes } from "types";

import "styles/components/atoms/display/Icon.scss";

function Icon(props: atomTypes.IconProps) {
  return (
    <div className="icon-container">
      <img {...props} className="icon" alt="" />
    </div>
  );
}

export default Icon;
