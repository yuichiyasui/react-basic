import React from "react";
import styled from "styled-components";

const InputText = (props: any) => {
  return <StyledInput {...props} />;
};

const StyledInput = styled.input`
  padding: 0.2rem 1rem;
  border-radius: 0.4rem;
  border: solid 1px #d4d9df;
  line-height: 1.5rem;
  margin: 0 auto 1.5rem auto;
  width: 16rem;
`;

export default InputText;
