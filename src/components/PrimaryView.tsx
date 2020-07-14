import React from 'react'
import styled from '@emotion/styled'
import MessageViewHeader from './MessageViewHeader'
import MessageView from './MessageView';

function PrimaryView() {
    return (
        <PrimaryViewBlock>
            <MessageViewHeader />
            <MessageView />
        </PrimaryViewBlock>
    )
}

const PrimaryViewBlock = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export default PrimaryView
