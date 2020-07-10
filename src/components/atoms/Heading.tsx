import React from "react";
import styled from "styled-components";

const Heading = (props: any) => {
  return <StyledHeading color={props.color}>{props.title}</StyledHeading>;
};

const StyledHeading = styled.h1(
  (props) => `
  color: ${props.color};
  font-size: 1.8rem;
  margin: 2rem 1rem 1.5rem 1.5rem;
`
);

export default Heading;
