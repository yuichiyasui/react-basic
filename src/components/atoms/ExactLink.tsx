import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ExactLink = (props: any) => {
  return <StyledLink to={props.to}>{props.children}</StyledLink>;
};

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default ExactLink;
