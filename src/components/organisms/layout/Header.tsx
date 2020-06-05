import React from "react";
import { organismTypes } from "types";

import "styles/components/organisms/layout/Header.scss";

function Header(props: organismTypes.HeaderProps) {
  const { content } = props;
  return <header className="header-container">{content}</header>;
}

export default Header;
