import React from 'react'
import styled from '@emotion/styled';
import User from './User';
import { IUserProps } from '../type/user';

function UserDetails(props: { focusedUser: IUserProps | null }) {
    return (
        <UserDetailsBlock>
            {props.focusedUser &&
                <User
                    id={props.focusedUser.id}
                    thumbnail={props.focusedUser.thumbnail}
                    name={props.focusedUser.name}
                    memo={props.focusedUser.memo}
                />
            }
        </UserDetailsBlock>
    )
};

const UserDetailsBlock = styled.main`
    padding: 30px;
    display: flex;
    width: 182px;
    border-left: 1px solid red;
`;

export default UserDetails;
