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
        포트폴리오의 코드는{" "}
        <NavLink to="" onClick={onClickHandler}>
          여기
        </NavLink>
        서 확인할 수 있습니다
      </span>
    </div>
  );
}

export default Footer;
