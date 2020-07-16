import React from 'react'
import styled from '@emotion/styled'
import User from './User';
import { IUserProps } from '../type/user';

const userListJson = [
    {
        id: 1,
        name: '정백경',
        thumbnail: 'https://d2v80xjmx68n4w.cloudfront.net/members/thumbs/MAfTm1480914005.jpg',
        memo: '정백경닉',
    },
    {
        id: 2,
        name: '백경정',
        thumbnail: 'https://d2v80xjmx68n4w.cloudfront.net/members/thumbs/LnZGv1578449956.jpeg',
        memo: '백경정닉',
    },
    {
        id: 3,
        name: '경정백',
        thumbnail: 'https://d2v80xjmx68n4w.cloudfront.net/members/thumbs/Z1CxV1565972786.jpeg',
        memo: '경정백닉',
    },
];

function SideBar({ focusedUser, clickUserHandler }: { focusedUser: IUserProps | null; clickUserHandler: (user: IUserProps) => void; }) {
    return (
        <AsideBlock>
            <AsideHeader>
                <AsideTitle>
                    전체메시지
                    <Ggueksae>></Ggueksae>
                </AsideTitle>
                <SearchIconWrapper
                    src="/img/ic_inbox_list_search.png"
                    alt="써치~"
                />
            </AsideHeader>
            <UserList>
                {userListJson.concat(userListJson).map(user => (
                    <User
                        key={user.id}
                        active={focusedUser?.id === user.id}
                        id={user.id}
                        area="list"
                        thumbnail={user.thumbnail}
                        name={user.name}
                        memo={user.memo}
                        clickUserHandler={clickUserHandler.bind(null, user)}
                    />
                ))}
            </UserList>
        </AsideBlock>
    )
};

const AsideBlock = styled.aside`
    display: flex;
    border-right: 1px solid red;
    flex-direction: column;
`;

const AsideHeader = styled.section`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    width: 239px;
    border-bottom: 1px solid red;
`;

const SearchIconWrapper = styled.img`
    width: 22px;
    height: 22px;
`;

const Ggueksae = styled.div`
    display: inline-block;
    transform: rotate(90deg);
`;

const AsideTitle = styled.h2`
    margin: 0;
    padding: 0;
`;

const UserList = styled.section`
padding-left: 20px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`;

export default SideBar;
