import React from "react";
import { atomTypes } from "types";
import styled from "styled-components";

import "styles/components/atoms/display/Card.scss";

function Card(props: atomTypes.CardProps) {
  const { label, body } = props;

  return (
    <div className="card-container">
      <div>{body}</div>
      <div>{label}</div>
    </div>
  );
}

export default Card;
