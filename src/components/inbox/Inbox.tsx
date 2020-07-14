import React from 'react'
import styled from '@emotion/styled'
import InboxListBox from './InboxListBox';
import UserProfileBox from './UserProfileBox';

function Inbox() {
    return (
        <InboxContainerBlock>
            <InboxListBlock>
                <InboxSearchBlock>
                    <span>전체메시지</span>
                    <SearchImg
                        src="https://d2v80xjmx68n4w.cloudfront.net/assets/icon/ic_search.png"
                        alt="검색 아이콘"
                    />
                </InboxSearchBlock>
                <InboxListBox />
                <InboxListBox />
                <InboxListBox />
                <InboxListBox />
            </InboxListBlock>
            <InboxRightBlock>
                <InboxDetailBlock>
                    <InboxChatBlock>
                        채팅 영역
                    </InboxChatBlock>
                    <InboxUserBlock>
                        <UserProfileBox></UserProfileBox>
                    </InboxUserBlock>
                </InboxDetailBlock>
                <InboxFooterBlock>채팅영역</InboxFooterBlock>
            </InboxRightBlock>
        </InboxContainerBlock>
    )
}

const InboxContainerBlock = styled.div`
    width: 1170px;
    margin: auto;
    margin-top: 30px;
    border: 1px solid gray;
    display: flex;
`

const InboxListBlock = styled.div`
    border-right: 1px solid gray;
    flex-basis: 278px;
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

const InboxRightBlock = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

const InboxDetailBlock = styled.div`
    display: flex;
    flex: 1;
`

const InboxChatBlock = styled.div`
    flex: 1;
    overflow-y: scroll;
    padding: 0 30px;
`

const InboxUserBlock = styled.div`
    border-left: 1px solid gray;
    flex-basis: 243px;
`

const InboxFooterBlock = styled.div`
    border-top: 1px solid gray;
    flex-basis: 145px;
`

export default Inbox
