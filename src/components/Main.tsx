import React from 'react'
import styled from '@emotion/styled';
import MessageDetail from './MessageDetail';
import UserDetails from './UserDetails';
import { IUserProps } from '../type/user';

function Main(props: { focusedUser: IUserProps | null }) {
    return (
        <MainBlock>
            <MessageDetail />
            <UserDetails
                focusedUser={props.focusedUser}
            />
        </MainBlock>
    )
};

const MainBlock = styled.main`
    flex-direction: row;
    /* flex: 1; */
    height: 598px;
    display: flex;
`;

export default Main;
