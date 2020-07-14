import React from "react";
import styled from "@emotion/styled";

function ViewFooter() {
  return (
    <ViewFooterBlock>
      <Input />
      <Actions>
        <Button>전송</Button>
      </Actions>
    </ViewFooterBlock>
  );
}

const ViewFooterBlock = styled.div`
  border-top: 1px solid #e4e5ed;
  padding: 16px;
`;

const Input = styled.input`
  height: 52px;
  width: 100%;
  border: 1px solid #e4e5ed;
  border-radius: 4px;
  font-size: 16px;
  padding: 0 16px;
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 16px;
`;

const Button = styled.button`
  height: 40px;
  line-height: 40px;
  padding: 0 32px;
  color: #303441;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  background-color: #ffd400;

  &:focus,
  &:active {
    background-color: #a88c00;
  }
`;

export default ViewFooter;
