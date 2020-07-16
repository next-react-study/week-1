import React from 'react'
import styled from '@emotion/styled'

function Header() {
    return (
        <HeaderBlock>
            <KmongLogo
                src="https://d2v80xjmx68n4w.cloudfront.net/assets/desktop/pages/main/kmong_logo.png"
                alt="크롱"
            />
        </HeaderBlock>
    )
};

const HeaderBlock = styled.header`
    padding: 20px;
    border-bottom: 1px solid red;
`;

const KmongLogo = styled.img`
    width: 90px;
`;

export default Header;
