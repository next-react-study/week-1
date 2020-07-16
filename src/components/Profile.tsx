import React from 'react';
import styled from '@emotion/styled';

export interface ProfileProps {
  src: string;
  size: number;
  circle: boolean;
  alt: string;
}

const StyledProfileImage = styled.img<ProfileProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${(props) => (props.circle ? '50%' : 'none')};
`;

function Profile({ src, alt, size, circle = true }: ProfileProps) {
  return <StyledProfileImage src={src} alt={alt} size={size} circle={circle} />;
}

export default Profile;
