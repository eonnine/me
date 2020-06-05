import React from "react";
import { atomTypes } from "types";

import "styles/components/atoms/display/Title.scss";

function Title(props: atomTypes.TitleProps) {
  const { sub = false, h = 2, value = "", prefix } = props;
  const Heading = `h${h}` as keyof JSX.IntrinsicElements;

  return (
    <div className="title-container">
      <Heading className={sub ? "article-title-sub" : "article-title"}>
        {prefix ? <i>{prefix}</i> : null}
        <span>{value}</span>
      </Heading>
    </div>
  );
}

export default Title;
