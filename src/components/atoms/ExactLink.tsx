import React from "react";
import { Link } from "react-router-dom";

const ExactLink = (props: any) => {
  return <Link to={props.to}>{props.children}</Link>;
};

export default ExactLink;
