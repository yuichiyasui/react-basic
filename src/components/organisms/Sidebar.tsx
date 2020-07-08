import React from "react";
import ExactLink from "components/atoms/ExactLink";
import Heading from "components/atoms/Heading";
import SidebarItems from "components/molecules/SidebarItems";

const Sidebar = () => {
  const items = [
    {
      title: "About",
      to: "/about",
    },
    {
      title: "Contents",
      to: "/",
    },
  ];
  return (
    <div>
      <ExactLink to={"/"}>
        <Heading title="React Basic" />
      </ExactLink>
      <SidebarItems items={items} />
    </div>
  );
};

export default Sidebar;
