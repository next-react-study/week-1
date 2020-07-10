import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import Wrapper from './Layout/Wrapper';

const StyledLink = styled(Link)`
  font-family: NotoSansCJKkr;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: -0.25px;
  color: #000;
  text-decoration: none;
`;

// TODO Wrapper에서 css props 받아서 처리하도록 수정
const SiteNavigationWrapper = styled(Wrapper)`
  justify-content: space-between;
  height: 40px;
`;

const SiteNavsWrapper = styled.ul`
  display: flex;
  align-items: center;
  & li {
    margin-right: 10px;
  }
`;

const EnterPriseCTALinkWrapper = styled.div`
  display: flex;
  align-items: center;
`;

interface SiteNavigationProps {
  children?: ReactNode;
}

function SiteNavigation({}: SiteNavigationProps) {
  return (
    <SiteNavigationWrapper>
      <SiteNavsWrapper>
        <li>
          <StyledLink to="/">마켓</StyledLink>
        </li>
        <li>
          <StyledLink to="/custom-project">맞춤견적</StyledLink>
        </li>
        <li>
          <StyledLink to="/enterprise">엔터프라이즈</StyledLink>
        </li>
      </SiteNavsWrapper>
      <EnterPriseCTALinkWrapper>
        <StyledLink to="/enterprise">기업고객이신가요? &gt;</StyledLink>
      </EnterPriseCTALinkWrapper>
    </SiteNavigationWrapper>
  );
}

export default SiteNavigation;
