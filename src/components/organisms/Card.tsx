import React from "react";
import styled from "styled-components";

const Card = (props: any) => {
  return <CardFrame>{props.children}</CardFrame>;
};

const CardFrame = styled.section`
  border: solid 1px #d4d9df;
  border-radius: 5px;
  width: 30vw;
  height: 50vh;
  padding: 1rem;
`;

export default Card;
