import React from "react";
import { Avatar } from "components/atoms/display";
import { Icon } from "components/atoms/general";
import { moleculeTypes } from "types";

import "styles/components/molecules/display/Profile.scss";

function Profile(props: moleculeTypes.ProfileProps) {
  const { profile } = props;
  const { name, position, img, navigations } = profile;

  const navigationElements = navigations.map(
    (navi: moleculeTypes.Navigation) => {
      const { key, icon, alt, value } = navi;
      return (
        <span key={key}>
          <Icon src={icon} alt={alt} />
          {value}
        </span>
      );
    }
  );

  return (
    <div className="profile-container">
      <Avatar src={img} />
      <h2 className="profile-name">{name}</h2>
      <h2 className="profile-position">{position}</h2>
      <div className="header-navigation">{navigationElements}</div>
    </div>
  );
}

export default Profile;
