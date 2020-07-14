import React from "react";
import styled from "@emotion/styled";
import PrimaryView from "./PrimaryView";
import ViewFooter from "./ViewFooter";
import SecondaryView from "./SecondaryView";

function View() {
  return (
    <ViewBlock>
      <Main>
        <PrimaryView />
        <SecondaryView />
      </Main>
      <ViewFooter />
    </ViewBlock>
  );
}

const ViewBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

export default View;
