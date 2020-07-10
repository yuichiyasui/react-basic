import React from "react";
import styled from "styled-components";

const Grid = (props: any) => {
  return <StyledGrid>{props.children}</StyledGrid>;
};

const StyledGrid = styled.div`
  display: grid;
  align-items: center;
  height: auto;
`;

export default Grid;
