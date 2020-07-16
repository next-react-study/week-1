import React from 'react';
import styled from '@emotion/styled';
import Label from './Label';
import Avatar from './Avatar';

export interface CardProps {
    nickName?: string,
    message?: string,
    thumbnailUrl?: string,
    isOnline?: boolean,
    status?: string,
    isUnread?: boolean,
}

function Card({
    nickName = '네모메몸고냠임',
    message = '안녕하세요, 문의해 주셔서 감사합니다. - 요청 사항 - 현재 준비되어 있는 사항을 준비해주시면..',
    thumbnailUrl = 'https://d2v80xjmx68n4w.cloudfront.net/members/thumbs/st9mT1550453555.PNG',
    isOnline = false,
    status,
    isUnread,
}: CardProps) {
    return (
        <CardBlock isUnread={isUnread}>
            <Avatar src={thumbnailUrl}/>

            <Content>
                <NameTag>{nickName}</NameTag>
                <Message>
                    {status && <Label status={status}/>}
                    {message}
                </Message>
            </Content>
        </CardBlock>
    );
}
const CardBlock = styled.div<CardProps>`
    padding: 16px;
    display: flex;
    border-bottom: 1px solid #e6e6e6;
    background-color: ${props => props.isUnread ? '#fffef2' : 'white'};
`;

const Content = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-left: 12px;
`

const NameTag = styled.div`
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 4px;
`;

const Message = styled.div`
    height: 32px;
    overflow: hidden;
    font-size: 13px;
    text-align: left;
`

export default Card;