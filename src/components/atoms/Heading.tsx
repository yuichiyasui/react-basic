import React from "react";
import styled from "styled-components";

const Heading = (props: any) => {
  return <StyledHeading {...props}>{props.title}</StyledHeading>;
};

const StyledHeading = styled.h1(
  (props: any) => `
  color: ${props.color};
  font-size: 1.8rem;
  text-align:${props.align === undefined ? "left" : props.align};
`
);

export default Heading;
