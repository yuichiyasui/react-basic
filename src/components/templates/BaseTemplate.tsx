import React from "react";
import Sidebar from "components/organisms/Sidebar";
import Content from "components/organisms/Content";
import styled from "styled-components";

const BaseTemplate = (props: any) => {
  return (
    <Flex>
      <Sidebar />
      <Content>{props.children}</Content>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  background-color: #efefef;
`;

export default BaseTemplate;
