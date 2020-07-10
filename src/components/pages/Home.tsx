import React from "react";
import logo from "assets/svg/logo.svg";
import { Link } from "react-router-dom";
import BaseTemplate from "components/templates/BaseTemplate";

const Home = () => {
  return (
    <BaseTemplate>
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link to="/about">Go About</Link>
      </div>
    </BaseTemplate>
  );
};

export default Home;
