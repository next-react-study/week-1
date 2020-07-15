import React, { useState } from 'react'
import styled from '@emotion/styled'

import Aside from './Aside';
import UserProfile from './UserProfile';
import MessageBalloon from './MessageBalloon';

const userList = [
    {
        id: 1,
        username: '타이거포터리',
        lastSentDate: '04.28',
        memo: '메모메모1',
        thumbnail: 'https://d2v80xjmx68n4w.cloudfront.net/members/thumbs/HkiH41580281057.jpeg',
    }, {
        id: 2,
        username: '비케이',
        lastSentDate: '04.27',
        memo: '메모메모2',
        thumbnail: 'https://d2v80xjmx68n4w.cloudfront.net/members/thumbs/En4l51534584152.jpg',
    }, {
        id: 3,
        username: '란블리',
        lastSentDate: '04.22',
        memo: '메모메모3',
        thumbnail: 'https://d2v80xjmx68n4w.cloudfront.net/members/thumbs/Z1CxV1565972786.jpeg',
    }, {
        id: 4,
        username: '베키',
        lastSentDate: '19.09.17',
        memo: '메모메모4',
        thumbnail: 'https://d2v80xjmx68n4w.cloudfront.net/members/thumbs/ChMnH1584509355.jpg',
    }
]

function Inbox() {

    const [activeUserId, setActiveUserId] = useState<number>(1);

    return (
        <InboxContainerBlock>
            <Aside
                userList={userList}
                activeUserId={activeUserId}
                setActiveUserId={setActiveUserId}
            />
            <Main>
                <InboxDetailBlock>
                    <InboxChatBlock>
                        <MessageBalloon
                            message="안녕!!"
                            sendAtDate="2020.07.15"
                            sendAtTime="10:10"
                            type="sent" //sent, received
                        />

                        <MessageBalloon
                            message="바보야!!!!!"
                            sendAtDate="2020.07.15"
                            sendAtTime="10:10"
                            type="received" //sent, received
                        />

                        <MessageBalloon
                            message="빵꾸똥꾸!"
                            sendAtDate="2020.07.15"
                            sendAtTime="10:10"
                            type="sent" //sent, received
                        />

                        <MessageBalloon
                            message="안녕!!"
                            sendAtDate="2020.07.15"
                            sendAtTime="10:10"
                            type="sent" //sent, received
                        />

                        <MessageBalloon
                            message="바보야!!!!!"
                            sendAtDate="2020.07.15"
                            sendAtTime="10:10"
                            type="received" //sent, received
                        />

                        <MessageBalloon
                            message="빵꾸똥꾸!"
                            sendAtDate="2020.07.15"
                            sendAtTime="10:10"
                            type="sent" //sent, received
                        />
                    </InboxChatBlock>
                    <UserBlock>
                        <UserProfile
                            userList={userList}
                            activeUserId={activeUserId}
                        />
                    </UserBlock>
                </InboxDetailBlock>
                <Footer>채팅영역</Footer>
            </Main>
        </InboxContainerBlock>
    )
}

const InboxContainerBlock = styled.div`
    width: 1170px;
    margin: auto;
    margin-top: 30px;
    border: 1px solid gray;
    display: flex;
    height: calc(100vh - 191px);
`

const Main = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`
const InboxDetailBlock = styled.div`
    display: flex;
    height: calc(100vh - 291px);
`

const InboxChatBlock = styled.div`
    flex: 1;
    overflow-y: scroll;
    padding: 0 30px;
`

const UserBlock = styled.div`
    border-left: 1px solid gray;
    flex-basis: 243px;
    overflow: auto;
`

const Footer = styled.div`
    border-top: 1px solid gray;
    flex-basis: 100px;
`

export default Inbox
