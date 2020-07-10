import React from "react";
import styled from "styled-components";

const Container = (props: any) => {
  return <StyledContainer>{props.children}</StyledContainer>;
};

const StyledContainer = styled.div`
  display: grid;
  justify-content: center;
`;

export default Container;
