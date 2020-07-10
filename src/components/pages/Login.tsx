import React from "react";

import Button from "components/atoms/Button";
import Card from "components/organisms/Card";
import NoSidebarTemplate from "components/templates/NoSidebarTemplate";
import InputText from "components/atoms/InputText";
import Container from "components/atoms/Container";
import Heading from "components/atoms/Heading";
import styled from "styled-components";
import ExactLink from "components/atoms/ExactLink";

const Login = () => {
  return (
    <NoSidebarTemplate>
      <Card>
        <Container>
          <StyledHeading align="center" title="Login" color="black" />
          <Paragraph>スペックを記録しよう</Paragraph>
          <InputText
            type="text"
            placeholder="メールアドレスを入力してください"
          />
          <InputText
            type="password"
            placeholder="パスワードを入力してください"
          />
          <ExactLink to="/">
            <Button>ログイン</Button>
          </ExactLink>
        </Container>
      </Card>
    </NoSidebarTemplate>
  );
};

const StyledHeading = styled(Heading)`
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  text-align: center;
  color: grey;
  margin-bottom: 2rem;
`;

export default Login;
