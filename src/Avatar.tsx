
import React from 'react';
import styled from '@emotion/styled';

export interface AvatarProps {
    src: string,
    size?: string,
}

function Avatar({
    src,
    size,
}: AvatarProps) {
    return (
        <AvatarBlock src={src} size={size}>
        </AvatarBlock>
    );
}


const AvatarBlock = styled.img<AvatarProps>`
    width: ${props=> props.size === 'LARGE' ? '120px' : '60px'};
    height: ${props=> props.size === 'LARGE' ? '120px' : '60px'};
    border-radius: 50%;
    
`;

export default Avatar;