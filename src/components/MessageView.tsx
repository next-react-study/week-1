import React from "react";
import styled from "@emotion/styled";
import Message from "./Message";

function MessageView() {
  return (
    <MessageViewBlock>
      <Message>안녕하세요</Message>
      <Message>hi</Message>
      <Message>ㅎㅇ</Message>
    </MessageViewBlock>
  );
}

const MessageViewBlock = styled.div`
  flex: 1;
  padding: 16px 32px;
  display: flex;
  flex-direction: column;
`;

export default MessageView;
