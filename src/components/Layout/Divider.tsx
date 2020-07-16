import React, { FC } from 'react';
import styled from '@emotion/styled';

export interface DividerProps {
  height?: number;
  color?: string;
}

const StyledDivider = styled.div<DividerProps>`
  width: 100%;
  height: ${(props: DividerProps) => props.height}px;
  background-color: ${(props: DividerProps) => props.color};
`;

const Divider: FC<DividerProps> = ({ height = 1, color = '#f5f5fa' }: DividerProps) => {
  return <StyledDivider height={height} color={color} />;
};

export default Divider;
