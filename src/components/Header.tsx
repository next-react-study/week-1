import React from 'react'
import styled from '@emotion/styled'
import UserThumbnail from './UserThumbnail';

function Header() {
    return (
        <HeaderWrapper>
            <HeaderBlock>
                <LogoBlock>
                    <Logo src="https://d2v80xjmx68n4w.cloudfront.net/assets/desktop/pages/main/kmong_logo.png"></Logo>
                </LogoBlock>
                <UserBlock>
                    <MenuBlock href="/">메시지</MenuBlock>
                    <MenuBlock href="/">마이크몽</MenuBlock>
                    <UserThumbnail
                        src="https://d2v80xjmx68n4w.cloudfront.net/members/thumbs/YH5Ou1555052640.png"
                        alt="유저썸네일"
                        width={36}
                    />
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

const MenuBlock = styled.a`
    margin-right: 20px;  
`

const UserBlock = styled.div`
    display: flex;
    align-items: center;
`

const Logo = styled.img`
    width: 90px;
`

export default Header
