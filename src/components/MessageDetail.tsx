import React from 'react'
import styled from '@emotion/styled'

function MessageDetail() {
    return (
        <MessageDetailBlock>
            메씨지들~
        </MessageDetailBlock>
    )
};

const MessageDetailBlock = styled.div`
    flex-grow: 1;
    padding: 0 30px;
    overflow-y: scroll;
`;


export default MessageDetail;
