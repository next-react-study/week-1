import React from 'react'
import styled from '@emotion/styled';

function Footer() {
    return (
        <FooterBlock>
            나는 메시지 입력~~~~~~
        </FooterBlock>
    )
};

const FooterBlock = styled.footer`
    border-top: 1px solid red;
    width: 100%;
    height: 145px;
    display: flex;
`;

export default Footer;
