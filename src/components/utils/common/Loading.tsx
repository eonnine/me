import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import "styles/components/utils/common/Loading.scss";

function Loading() {
  return (
    <div className="global-loading-container">
      <Spin indicator={<LoadingOutlined style={{ fontSize: 70 }} spin />} />
    </div>
  );
}

export default Loading;
