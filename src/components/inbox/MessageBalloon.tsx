import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

interface IMessageBalloonProps {
    message: string;
    sendAtDate: string;
    sendAtTime: string;
    type?: string;
}

function MessageBalloon(props: IMessageBalloonProps) {
    return (
        <MessageBalloonBlock
            type={props.type}
        >
            <BalloonWrapper
                type={props.type}
            >
                <Balloon
                    type={props.type}
                >{props.message}</Balloon>
                <SendAtBlock>
                    <Date>{props.sendAtDate}</Date>
                    <Time>{props.sendAtTime}</Time>
                </SendAtBlock>
            </BalloonWrapper>
        </MessageBalloonBlock>
    )
}

const MessageBalloonBlock = styled.div<Pick<IMessageBalloonProps, 'type'>>`
    margin-top: 20px;
    ${props => props.type === 'sent' && css`
        display: flex;
        justify-content: flex-end;
    `}
`

const BalloonWrapper = styled.div<Pick<IMessageBalloonProps, 'type'>>`
    margin-top: 20px;
    ${props => props.type === 'sent' && css`
        display: flex;
        flex-direction: row-reverse;
        align-items: flex-end;
    `}
    ${props => props.type === 'received' && css`
        display: flex;
        align-items: flex-end;
    `}
`

// Pick<IPerson, "name" | "age">
const Balloon = styled.div<Pick<IMessageBalloonProps, 'type'>>`
    padding: 15px;
    border-radius: 16px;
    max-width: 390px;
    display: inline-block;
    ${props => props.type === 'sent' && css`
        border-top-right-radius: 0px;
        background-color: rgb(254, 238, 125);
        margin-left: 4px;
    `}
    ${props => props.type === 'received' && css`
        border-top-left-radius: 0px;
        background-color: #f5f6fa;
        margin-right: 4px;
    `}
`

const SendAtBlock = styled.div`

`

const Time = styled.div`
    font-size: 10px;
    color: #9a9ba7;
`

const Date = styled.div`
    font-size: 10px;
    color: #9a9ba7;
`

export default MessageBalloon
