import React from "react";
import styled from "@emotion/styled";

function Message({ children }: { children: React.ReactChild }) {
  return (
    <MessageBlock>
      <Item>{children}</Item>
    </MessageBlock>
  );
}

const MessageBlock = styled.div`
  margin-bottom: 8px;
  display: flex;
`;

const Item = styled.div`
  padding: 16px;
  font-size: 16px;
  background-color: #ffffff;
  border-radius: 8px;
  margin-bottom: 8px;
  background-color: #f5f6fa;
`;

export default Message;
