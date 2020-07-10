import React from "react";
import styled from "styled-components";

const Button = (props: any) => {
  return <StyledButton>{props.children}</StyledButton>;
};

const StyledButton = styled.button`
  background-color: #0075c2;
  color: white;
  border: 0;
  padding: 0.4rem 1.5rem;
  border-radius: 0.4rem;
  margin: 0.2rem;
  width: 100%;
`;

export default Button;
