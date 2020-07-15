import React from 'react'
import styled from '@emotion/styled'
import InboxListItem from './InboxListItem';
import { IUserType } from '../../type/userType';

interface IAdiseProps {
    userList: IUserType[];
    activeUserId: number;
    setActiveUserId: (id: number) => void;
}

function Aside(props: IAdiseProps) {
    return (
        <AsideBlock>
            <InboxSearchBlock>
                <span>전체메시지</span>
                <SearchImg
                    src="https://d2v80xjmx68n4w.cloudfront.net/assets/icon/ic_search.png"
                    alt="검색 아이콘"
                />
            </InboxSearchBlock>
            <InboxListBlock>
                {props.userList.map(user => (
                    <InboxListItem
                        user={user}
                        activeUserId={props.activeUserId}
                        setActiveUserId={props.setActiveUserId}
                    />
                ))}
            </InboxListBlock>
        </AsideBlock>
    )
}

const AsideBlock = styled.div`
    border-right: 1px solid gray;
    flex-basis: 278px;
`

const InboxListBlock = styled.div`
    overflow: auto;
    height: calc(100vh - 253px);
`

const SearchImg = styled.img`
    width: 22px;
`

const InboxSearchBlock = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    justify-content: space-between;
`

export default Aside
