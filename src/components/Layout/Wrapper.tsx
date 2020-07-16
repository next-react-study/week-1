import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

const StyledWrapper = styled.div`
  width: 1170px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export interface WrapperProps {
  children?: ReactNode;
  className?: string;
}

export const wrapperStyle = {};

function Wrapper({ children, className }: WrapperProps) {
  return <StyledWrapper className={className}>{children}</StyledWrapper>;
}

export default Wrapper;
