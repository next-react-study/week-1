import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import layoutBase from '../../style/layoutBase';
import SiteNavigation from './SiteNavigation';
import Logo from '../Logo';
import Divider from './Divider';
import Profile from '../Profile';

// TODO

function Header() {
  return (
    <HeaderBlock>
      <SiteNavigation />
      <Divider />
      <HeaderMainWrapper>
        <div>
          <Logo />
        </div>
        <FlexWrapper>
          <form>
            <input type="text" placeholder="키워드를 입력해주세요" />
            <button>
              <img width="18px" src="https://d2v80xjmx68n4w.cloudfront.net/assets/icon/ic_search.png" />
            </button>
          </form>
          <StyledLink to="/">메시지</StyledLink>
          <StyledLink to="/">마이크몽</StyledLink>
          <Profile
            src={'https://d2v80xjmx68n4w.cloudfront.net/members/thumbs/BCRnk1555317737.jpg'}
            size={32}
            alt="user-thumbnail"
            circle
          />
        </FlexWrapper>
      </HeaderMainWrapper>
      <Divider />
    </HeaderBlock>
  );
}

const HeaderBlock = styled.header`
  flex-direction: column;
`;

const HeaderMainWrapper = styled.div`
  ${layoutBase};
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
  padding-bottom: 24px;
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  padding: 8px;
`;

export default Header;
