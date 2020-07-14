import React from 'react'
import styled from '@emotion/styled'

function Header() {
    return (
        <HeaderWrapper>
            <HeaderBlock>
                <LogoBlock>
                    <Logo src="https://d2v80xjmx68n4w.cloudfront.net/assets/desktop/pages/main/kmong_logo.png"></Logo>
                </LogoBlock>
                <UserBlock>
                    회원정보
                </UserBlock>
            </HeaderBlock>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    border-bottom: 1px solid gray;
`

const HeaderBlock = styled.div`
    width: 1170px;
    margin: auto;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center
`

const LogoBlock = styled.div`

`

const UserBlock = styled.div`

`

const Logo = styled.img`
    width: 90px;
`

export default Header
