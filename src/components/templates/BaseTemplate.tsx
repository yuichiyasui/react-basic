import React from "react";
import Sidebar from "components/organisms/Sidebar";
// import styled from "styled-components";

const BaseTemplate = (props: any) => {
  return (
    <div>
      <Sidebar />
      <div>{props.children}</div>
    </div>
  );
};
export default BaseTemplate;
