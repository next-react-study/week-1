import React from 'react';
import styled from '@emotion/styled';

export interface ContentProps {
    status?: string,
}

function Content({
    status,
}: ContentProps) {
    return (
        <ContentBlock>
            {status}
        </ContentBlock>
    );
}

const ContentBlock = styled.div`
    padding: 2px 4px;
    border-radius: 4px;
    background-color: green;
    font-size: 11px;
    color: white;
    display: inline-block;
    margin-right: 4px;
`;

export default Content;