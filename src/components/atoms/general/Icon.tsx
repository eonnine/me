import React, { Suspense } from "react";
import { atomTypes } from "types";
import { Loading } from "components/atoms/display";

import "styles/components/atoms/general/Icon.scss";

function Icon(props: atomTypes.IconProps) {
  const { src, alt = "", size = "small", onClick } = props;

  const onClickHandler = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="icon-container">
      <Suspense fallback={<Loading />}>
        <img
          src={src}
          className={`icon ${size}`}
          alt={alt}
          onClick={onClickHandler}
        />
      </Suspense>
    </div>
  );
}

export default Icon;
