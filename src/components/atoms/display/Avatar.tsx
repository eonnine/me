import React from "react";
import { atomTypes } from "types";

import "styles/components/atoms/display/Avatar.scss";

function Avatar(props: atomTypes.AvatarProps) {
  return (
    <div className="avatar-container">
      <img {...props} className={props.className || "thumb"} alt="" />
    </div>
  );
}

export default Avatar;
