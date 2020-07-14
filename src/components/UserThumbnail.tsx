import React from 'react'
import styled from '@emotion/styled'

interface IThumbnailProps {
    src: string;
    alt?: string;
    width: number;
}

function UserThumbnail(props: IThumbnailProps) {
    return (
        <UserThumbnailBlock
            src={props.src}
            alt={props.alt}
            width={props.width}
        />
    )
}

const UserThumbnailBlock = styled.img<IThumbnailProps>`
    border-radius: 50%;
    width: ${props => props.width}px;
`

export default UserThumbnail
