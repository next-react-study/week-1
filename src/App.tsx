import React from "react";
import styled from "@emotion/styled";
import Header from "./components/Header";
import InboxContainer from "./components/InboxContainer";
import { Global, css } from "@emotion/core";

const globalStyles = css`
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <AppBlock>
      <Global styles={globalStyles} />
      <Header />
      <InboxContainer />
    </AppBlock>
  );
}

const AppBlock = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default App;
