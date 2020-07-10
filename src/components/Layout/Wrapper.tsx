import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

const StyledWrapper = styled.div`
  width: 1170px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
//TODO Css props으로 받아서 처리할 수 있도록 작업

export interface WrapperProps {
  children?: ReactNode;
  className?: string;
}

export const wrapperStyle = {};

function Wrapper({ children, className }: WrapperProps) {
  return <StyledWrapper className={className}>{children}</StyledWrapper>;
}

export default Wrapper;
