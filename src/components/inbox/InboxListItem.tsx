import React from 'react'
import styled from '@emotion/styled'
import UserThumbnail from '../UserThumbnail';
import { IUserType } from '../../type/userType';

interface IInboxListItemProps {
    activeUserId: number;
    setActiveUserId: (id: number) => void;
    user: IUserType;
}

function InboxListItem(props: IInboxListItemProps) {
    return (
        <InboxListBlock
            active={props.activeUserId === props.user.id}
            onClick={props.setActiveUserId.bind(null, props.user.id)}
        >
            <UserThumbnail
                src={props.user.thumbnail}
                alt="유저프로필"
                width={60}
            />
            <UserInfoBlock>
                <span>{props.user.username}</span>
                <span>{props.user.lastSentDate}</span>
            </UserInfoBlock>
        </InboxListBlock>
    )
}

const InboxListBlock = styled.div<{ active: boolean }>`
    height: 107px;
    padding: 20px;
    display: flex;
    align-items: center;
    border-top: 1px solid gray;
    background-color: ${props => props.active ? '#fff' : '#f5f6fa'}
`

const UserInfoBlock = styled.div`
    flex-basis: calc(100% - 60px);
    width: calc(100% - 60px);
    padding-left: 12px;
    display: flex;
    justify-content: space-between;
`

export default InboxListItem
