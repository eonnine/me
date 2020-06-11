import React from "react";
import { NavLink } from "react-router-dom";
import { util } from "configs";

import "styles/components/organisms/layout/Footer.scss";

function Footer() {
  const onClickHandler = () => {
    util.openNewTab("https://github.com/eonnine/me");
  };

  return (
    <div className="footer-container">
      <span className="message">
        코드는{" "}
        <NavLink to="" onClick={onClickHandler}>
          이 곳
        </NavLink>
        에서 확인할 수 있습니다
      </span>
    </div>
  );
}

export default Footer;
