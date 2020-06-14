import React, { Suspense } from "react";
import { atomTypes } from "types";
import Loading from "./Loading";

import "styles/components/atoms/display/Avatar.scss";

function Avatar(props: atomTypes.AvatarProps) {
  return (
    <div className="avatar-container">
      <Suspense fallback={<Loading />}>
        <img {...props} className={props.className || "thumb"} alt="" />
      </Suspense>
    </div>
  );
}

export default Avatar;
