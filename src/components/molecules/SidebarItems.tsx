import React from "react";
import ExactLink from "components/atoms/ExactLink";

const SidebarItems = (props: any) => {
  return (
    <ul>
      {props.items.map((prop: any) => (
        <ExactLink to={prop.to}>
          <li>{prop.title}</li>
        </ExactLink>
      ))}
    </ul>
  );
};

export default SidebarItems;
