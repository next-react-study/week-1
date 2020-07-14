import React from "react";
import styled from "@emotion/styled";
import InboxSidebar from "./InboxSidebar";

function InboxContainer() {
  return (
    <InboxContainerBlock>
      <Main>
        <InboxSidebar />
      </Main>
    </InboxContainerBlock>
  );
}

const InboxContainerBlock = styled.div`
  flex: 1;
  position: relative;
  padding: 40px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Main = styled.div`
  height: 100%;
  width: 1170px;
  border: 1px solid #e4e5ed;
  display: flex;
  flex-direction: row;
`;

export default InboxContainer;
