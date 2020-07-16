import React from 'react';
import styled from '@emotion/styled';
import Profile from './Profile';
import StarIcon from './StarIcon';

interface InboxBuddyCardProps {
  username: string;
  title: string;
  date: string;
  stared: boolean;
  profileSrc: string;
  // Status 작업하기
  // enum
}

function InboxBuddyCard({ username, title, date, stared, profileSrc }: InboxBuddyCardProps) {
  return (
    <InboxBuddyCardBlock>
      <Profile src={profileSrc} size={60} alt="user-thumbnail" circle />
      <div>
        <FlexBetweenWrapper>
          <InboxBuddyCardUsername>{username}</InboxBuddyCardUsername>
          <div className="flex">
            <InboxBuddyCardUsername>{date}</InboxBuddyCardUsername>
            <StarIcon stared={stared} />
          </div>
        </FlexBetweenWrapper>
        <div>{title}</div>
      </div>
    </InboxBuddyCardBlock>
  );
}

function InboxBuddyCards({ inboxBuddys }: InboxBuddyCardsProps) {
  return (
    <InboxBuddyCardsBlock>
      {inboxBuddys.map(({ username, title, date, stared, profileSrc }) => (
        <InboxBuddyCard username={username} title={title} date={date} stared={stared} profileSrc={profileSrc} />
      ))}
    </InboxBuddyCardsBlock>
  );
}

const InboxBuddyCardsBlock = styled.ul`
  background-color: #f5f6fa;
`;

const InboxBuddyCardBlock = styled.li`
  display: flex;
  align-items: center;
  /* 일단 고정으로 */
  width: 278px;
  padding: 24px;
  border-bottom: 1px solid #e4e5ed;
  &:hover {
    background-color: #ebedf5;
  }
`;

const InboxBuddyCardUsername = styled.div`
  flex-basis: 80px;
  font-size: 14px;
`;

const FlexBetweenWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  &.flex {
    display: flex;
  }
`;

export interface BuddyCard {
  username: string;
  title: string;
  date: string;
  stared: boolean;
  profileSrc: string;
}

interface InboxBuddyCardsProps {
  inboxBuddys: BuddyCard[];
}

export default InboxBuddyCards;
