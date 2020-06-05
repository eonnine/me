import React from "react";
import { atomTypes } from "types";

import "styles/components/atoms/general/Avatar.scss";

function Avatar(props: atomTypes.AvatarProps) {
  return (
    <div className="avatar-container">
      <img {...props} className={props.className || "thumb"} />
    </div>
  );
}

export default Avatar;
