import React from 'react';
import styled from '@emotion/styled';

export interface ChatBoxProps {
    message?: string,
    isMine?: boolean,
}

function ChatBox({
    message,
    isMine,
}: ChatBoxProps) {
    return (
        <ChatBoxBlock isMine={isMine}>
            {message}
        </ChatBoxBlock>
    );
}


const ChatBoxBlock = styled.div<ChatBoxProps>`
    flex-grow: 1;
    padding: 12px 16px;
    border-radius: 6px;
    font-size: 13px;
    margin-bottom: 8px;
    text-align: left;
    display: inline-block;
    background-color: ${props => props.isMine && props.isMine === true ? '#feee7d' : '#f5f6fa'};
    float: ${props => props.isMine && props.isMine === true ? 'right' : 'left'};
`;

export default ChatBox;