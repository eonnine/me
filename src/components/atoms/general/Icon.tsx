import React from "react";
import { atomTypes } from "types";

import "styles/components/atoms/display/Icon.scss";

function Icon(props: atomTypes.IconProps) {
  const { src, alt = "", size = "small", onClick } = props;

  const onClickHandler = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="icon-container">
      <img
        src={src}
        className={`icon ${size}`}
        alt={alt}
        onClick={onClickHandler}
      />
    </div>
  );
}

export default Icon;
