import React from "react";
import { Icon } from "components/atoms/general";
import { Profile } from "components/molecules/display";
import { organismTypes, moleculeTypes } from "types";
import { util } from "configs";
import { values } from "../configs";

import "styles/components/organisms/layout/Header.scss";

function Header(props: organismTypes.HeaderProps) {
  const { data } = props;
  const { headerValues } = values;

  const onClickHandler = (url: string | undefined) => {
    if (url) {
      util.openNewTab(url);
    }
  };

  const icons = headerValues.map((navi: moleculeTypes.Navigation) => {
    const { key, icon, alt, value } = navi;
    return (
      <span key={key} className="header-link">
        <Icon
          src={icon}
          alt={alt}
          size="large"
          onClick={() => onClickHandler(value)}
        />
      </span>
    );
  });

  return (
    <header className="header-container">
      <Profile profile={data.profile} />
      <div className="header-icons">{icons}</div>
    </header>
  );
}

export default Header;
