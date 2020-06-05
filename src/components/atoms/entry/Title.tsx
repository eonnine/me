import React from "react";
import { atomTypes } from "types";

import "styles/components/atoms/entry/Title.scss";

function Title(props: atomTypes.TitleProps) {
  const { sub = false, value = "", prefix } = props;

  return (
    <div className="title-container">
      <h3 className={sub ? "article-title-sub" : "article-title"}>
        {prefix ? <i>{prefix}</i> : null}
        <span>{value}</span>
      </h3>
    </div>
  );
}

export default Title;
