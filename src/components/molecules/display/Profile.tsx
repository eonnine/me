import React from "react";
import { Avatar } from "components/atoms/general";
import { moleculeTypes } from "types";

import { values } from "../configs";

import "styles/components/molecules/display/Profile.scss";

function Profile(props: moleculeTypes.ProfileProps) {
  const { ProfileValues } = values;

  return (
    <div className="profile-container">
      <Avatar {...props} />
      <h2 className="profile-position">{ProfileValues.position}</h2>
    </div>
  );
}

export default Profile;
