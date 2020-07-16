import React from 'react';
import styled from '@emotion/styled';

export interface LabelProps {
    status?: string,
}

function Label({
    status,
}: LabelProps) {
    return (
        <LabelBlock>
            {status}
        </LabelBlock>
    );
}

const LabelBlock = styled.div`
    padding: 2px 4px;
    border-radius: 4px;
    background-color: green;
    font-size: 11px;
    color: white;
    display: inline-block;
    margin-right: 4px;
`;

export default Label;