import React from "react";
import styled from "styled-components";

const Content = (props: any) => {
  return <Section>{props.children}</Section>;
};

const Section = styled.section`
  padding: 2rem;
`;

export default Content;
