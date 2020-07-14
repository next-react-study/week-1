import React from "react";
import styled from "@emotion/styled";

export interface ChannelItemProps {
  channel: {
    profileImage: string;
    name: string;
    message: string;
    date: string;
  };
}

function ChannelItem({
  channel: { profileImage, name, message, date },
}: ChannelItemProps) {
  return (
    <ChannelItemBlock>
      <ImageWrapper>
        <Image src={profileImage} />
      </ImageWrapper>
      <Content>
        <Header>
          <Name>{name}</Name>
          <Date>{date}</Date>
        </Header>
        <Message>{message}</Message>
      </Content>
    </ChannelItemBlock>
  );
}

const ChannelItemBlock = styled.div`
  height: 120px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #e4e5ed;
  background-color: #ffffff;
  cursor: pointer;

  &:hover {
    background-color: #eaeaea;
  }
`;

const ImageWrapper = styled.div`
  padding: 16px;
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const Content = styled.div`
  flex: 1;
  padding: 16px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
`;
const Name = styled.div`
  font-size: 14px;
  font-weight: bold;
  flex: 1;
`;

const Date = styled.div`
  font-size: 13px;
  color: #999999;
`;

const Message = styled.div`
  font-size: 16px;
  padding-top: 8px;
`;

export default ChannelItem;
