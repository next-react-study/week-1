import React from 'react'
import styled from '@emotion/styled'
import UserThumbnail from './UserThumbnail';

function InboxListBox() {
    return (
        <InboxListBlock>
            <UserThumbnail
                src="https://d2v80xjmx68n4w.cloudfront.net/members/thumbs/En4l51534584152.jpg"
                alt="유저프로필"
                width={60}
            />
            <UserInfoBlock>
                <span>비케이</span>
                <span>04.27</span>
            </UserInfoBlock>
        </InboxListBlock>
    )
}

const InboxListBlock = styled.div`
    height: 107px;
    padding: 20px;
    display: flex;
    align-items: center;
    border-top: 1px solid gray;
`

const UserInfoBlock = styled.div`
    flex-basis: calc(100% - 60px);
    width: calc(100% - 60px);
    padding-left: 12px;
    display: flex;
    justify-content: space-between;
`

export default InboxListBox
