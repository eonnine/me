import React from "react";
import { util } from "configs";

import "styles/components/organisms/layout/Footer.scss";

function Footer() {
  const onClickHandler = () => {
    util.openNewTab("https://github.com/eonnine/me");
  };

  return (
    <div className="footer-container">
      <span className="message">
        이 포트폴리오의 소스는 <a onClick={onClickHandler}>이 곳</a>에서 확인할
        수 있습니다
      </span>
    </div>
  );
}

export default Footer;
