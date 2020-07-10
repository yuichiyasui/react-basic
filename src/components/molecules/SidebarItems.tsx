import React from "react";
import ExactLink from "components/atoms/ExactLink";
import styled from "styled-components";

const SidebarItems = (props: any) => {
  return (
    <Items>
      {props.items.map((prop: any, i: number) => (
        <ExactLink key={i} to={prop.to}>
          <Item>{prop.title}</Item>
        </ExactLink>
      ))}
    </Items>
  );
};

const Items = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const Item = styled.li`
  color: white;
  font-size: 1.4rem;
  padding: 0.8rem 1.4rem;
  &: hover;
`;

export default SidebarItems;
