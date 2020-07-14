import React from "react";
import styled from "@emotion/styled";
import ChannelItem from "./ChannelItem";

const channels = [
  {
    profileImage:
      "https://d2v80xjmx68n4w.cloudfront.net/members/thumbs/imykI1551325546.png",
    name: "우치",
    message: "마지막 메세지",
    date: "04.02",
  },
  {
    profileImage:
      "https://d2v80xjmx68n4w.cloudfront.net/members/thumbs/BCRnk1555317737.jpg",
    name: "dali",
    message: "마지막 메세지 마지막 메세지 마지막 메세지",
    date: "02.22",
  },
];

function InboxSidebar() {
  return (
    <InboxSidebarBlock>
      <Header>전체메세지</Header>
      <Channels>
        {channels.map((channel) => (
          <ChannelItem key={channel.name} channel={channel}></ChannelItem>
        ))}
      </Channels>
    </InboxSidebarBlock>
  );
}

const InboxSidebarBlock = styled.div`
  width: 280px;
  border-right: 1px solid #e4e5ed;
  display: flex;
  flex-direction: column;
  background-color: #f5f6fa;
`;

const Header = styled.div`
  height: 60px;
  border-bottom: 1px solid #e4e5ed;
  display: flex;
  align-items: center;
  padding: 0 24px;
  background-color: #ffffff;
`;

const Channels = styled.div`
  flex: 1;
`;

export default InboxSidebar;
