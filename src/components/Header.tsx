import React from "react";
import styled from "@emotion/styled";

function Header() {
  return (
    <HeaderBlock>
      <Content>
        <Logo src="https://d2v80xjmx68n4w.cloudfront.net/assets/desktop/pages/main/kmong_logo.png" />
        <Actions>
          <Link>메세지</Link>
          <Link>마이크몽</Link>
        </Actions>
      </Content>
    </HeaderBlock>
  );
}

const HeaderBlock = styled.header`
  height: 60px;
  border-bottom: 1px solid #e4e5ed;
`;

const Content = styled.div`
  width: 1170px;
  height: 60px;
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  align-items: center;
`;

const Logo = styled.img`
  display: block;
  width: 120px;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex: 1;
`;

const Link = styled.div`
  font-size: 16px;
  color: #333333;
  padding: 0 16px;
`;

export default Header;
