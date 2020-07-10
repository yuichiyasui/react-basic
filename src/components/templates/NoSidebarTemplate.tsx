import React from "react";
import styled from "styled-components";

const NoSidebarTemplate = (props: any) => {
  return <Wrapper>{props.children}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  justify-content: center;
  align-content: center;
`;

export default NoSidebarTemplate;
