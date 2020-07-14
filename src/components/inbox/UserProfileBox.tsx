import React from 'react'
import styled from '@emotion/styled'
import UserThumbnail from '../UserThumbnail';

function UserProfileBox() {
    return (
        <UserProfileBlock>
            <UserThumbnail
                src="https://d2v80xjmx68n4w.cloudfront.net/members/thumbs/En4l51534584152.jpg"
                alt="유저프로필"
                width={70}
            />
            <UsernameBlock>비케이</UsernameBlock>
            <MemoBlock>메모메모</MemoBlock>
            <UserInfoWrapper>
                <UserInfoBlock>
                    <UserInfoTitle>만족도</UserInfoTitle>
                    <UserInfoInfo>100%</UserInfoInfo>
                </UserInfoBlock>
                <UserInfoBlock>
                    <UserInfoTitle>회원 구분</UserInfoTitle>
                    <UserInfoInfo>기업회원</UserInfoInfo>
                </UserInfoBlock>
                <UserInfoBlock>
                    <UserInfoTitle>연락가능시간</UserInfoTitle>
                    <UserInfoInfo>10시 ~ 18시</UserInfoInfo>
                </UserInfoBlock>
                <UserInfoBlock>
                    <UserInfoTitle>평균응답시간</UserInfoTitle>
                    <UserInfoInfo>1시간 내외</UserInfoInfo>
                </UserInfoBlock>
            </UserInfoWrapper>
        </UserProfileBlock>
    )
}

const UserProfileBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
`

const UsernameBlock = styled.div`
    margin-top: 10px;
    color: #303441;
    font-size: 15px;
    font-weight: 700;
`

const MemoBlock = styled.div`
    margin-top: 5px;
    color: #555969;
    font-size: 13px;
`

const UserInfoWrapper = styled.div`
    margin-top: 15px;
    width: 100%;
`

const UserInfoBlock = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 8px;
`

const UserInfoTitle = styled.div`
    color: #999;
    flex: 1;
`

const UserInfoInfo = styled.div`
    flex: 1;
    text-align: right;
`

export default UserProfileBox
