import React from 'react'
import styled from '@emotion/styled'
import UserThumbnail from '../UserThumbnail';
import UserInfo from './UserInfo';
import { IUserType } from '../../type/userType';

interface IUserProfileProps {
    userList: Array<IUserType>;
    activeUserId: number;
}

function UserProfile(props: IUserProfileProps) {

    const activeUser = props.userList.find(user => user.id === props.activeUserId);

    return (
        <UserProfileBlock>
            {activeUser &&
                <>
                    <UserThumbnail
                        src={activeUser.thumbnail}
                        alt="유저프로필"
                        width={70}
                    />
                    <UsernameBlock>{activeUser.username}</UsernameBlock>
                    <MemoBlock>{activeUser.memo}</MemoBlock>
                    <UserInfo />
                </>
            }
        </UserProfileBlock>
    )
}

const UserProfileBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
`

const UsernameBlock = styled.div`
    margin-top: 10px;
    color: #303441;
    font-size: 15px;
    font-weight: 700;
`

const MemoBlock = styled.div`
    margin-top: 5px;
    color: #555969;
    font-size: 13px;
`

export default UserProfile
