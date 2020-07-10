import React from "react";
import ExactLink from "components/atoms/ExactLink";
import Heading from "components/atoms/Heading";
import SidebarItems from "components/molecules/SidebarItems";
import styled from "styled-components";

const Sidebar = () => {
  const items = [
    {
      title: "About",
      to: "/about",
    },
    {
      title: "Contents",
      to: "/contents",
    },
  ];
  return (
    <Section>
      <ExactLink to={"/"}>
        <Heading color="white" title="React Basic" />
      </ExactLink>
      <SidebarItems items={items} />
    </Section>
  );
};

const Section = styled.section`
  background-color: #001e43;
  height: 100vh;
  width: 20vw;
  padding: auto 1.4rem;
`;

export default Sidebar;
