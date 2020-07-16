import React from 'react';
import styled from '@emotion/styled';
import layoutBase from '../style/layoutBase';
import Profile from './Profile';
import StarIcon from './StarIcon';
import InboxBuddyCards from './InboxBuddyCards';
import buddyCards from '../constants/buddyCards';

interface message {
  isMine: boolean;
  content: string;
  date: string;
  time: string;
  id: string;
}

interface InboxProps {
  active?: boolean;
  // 빠른 테스트 위해 잠시 ?
  messages?: message[];
}

const exampleMassages: message[] = [
  {
    isMine: false,
    content: '안녕하세요',
    date: '19.08.05',
    time: '11:19',
    id: 'message-0',
  },
  {
    isMine: true,
    content: '안녕하세요',
    date: '19.08.05',
    time: '11:20',
    id: 'message-1',
  },
  {
    isMine: false,
    content: '제 서비스 사시죠? 콜콜 ',
    date: '19.08.06',
    time: '11:30',
    id: 'message-2',
  },
];

function Inbox({ active = false, messages = exampleMassages }: InboxProps) {
  return (
    <InboxBlock>
      <InboxAsdie>
        <form>
          <select name="cars" id="cars">
            <option value="volvo">전체메시지</option>
            <option value="saab">안 읽은 메시지</option>
            <option value="mercedes">별표 메시지</option>
            <option value="audi">거래 중 메시지</option>
          </select>
        </form>
        <InboxBuddyCards inboxBuddys={buddyCards} />
      </InboxAsdie>
      <InboxMain>
        {active ? (
          <InboxActiveBlock>
            <InboxActiveMain>
              <InboxMessageBox>
                {exampleMassages.map(({ isMine, content, date, time, id }) => (
                  <div key={id}>
                    <div>{isMine}</div>
                    <div>{content}</div>
                    <div>{date}</div>
                    <div>{time}</div>
                  </div>
                ))}
              </InboxMessageBox>
              <InboxBuddyDetailBox>
                <Profile
                  src="https://d2v80xjmx68n4w.cloudfront.net/members/thumbs/Gg3pg1580953703.jpg"
                  size={70}
                  alt="user-thumbnail"
                  circle
                />
                <h3>BuddyName</h3>
                {/* buddyConditions */}
                <div>
                  <div>
                    <span>만족도</span> <span>100%</span>
                  </div>
                  <div>
                    <span>회원구분</span> <span>개인회원</span>
                  </div>
                  <div>
                    <span>연락가능시간</span> <span>9시~18시</span>
                  </div>
                  <div>
                    <span>평균응답시간</span> <span>1시간이내</span>
                  </div>
                </div>

                <a href="/seller/selling_history?keyword=주식회사아이티프런티어">
                  판매했던 서비스 <span>1건</span>{' '}
                  <img width="15px" src="https://kmong.com/img/inbox/ic_inbox_profile_history_arrow.png" />
                </a>
                <h4>전문가 서비스</h4>
                {/* ServiceCard */}
                <FlexWrapper>
                  <a href="/gig/203301">
                    <img width="70px" src="https://d2v80xjmx68n4w.cloudfront.net/gigs/sGcxR1580977572.jpg" />
                  </a>
                  <div>
                    <p>카카오 싱크와 플래쉬 게임을 활용한 이벤트</p>
                    <p>100,000원</p>
                  </div>
                </FlexWrapper>
              </InboxBuddyDetailBox>
            </InboxActiveMain>

            <InboxMessageForm>
              <textarea placeholder="메시지를 입력해주세요" />
              <InboxMessageFormFooter>
                <InboxMessageUtilButtonsWrapper>
                  <button type="button">파일첨부</button>
                  <button type="button">결제 요청</button>
                </InboxMessageUtilButtonsWrapper>
                <InboxMessageSubmitButton type="submit" disabled>
                  전송
                </InboxMessageSubmitButton>
              </InboxMessageFormFooter>
            </InboxMessageForm>
          </InboxActiveBlock>
        ) : (
          <InboxDeactiveBlock>
            <img src="https://kmong.com/img/inbox/inbox_detail_empty.png" alt="대화 상대 선택 " width="142px" />
            대화 상대를 선택해주세요
          </InboxDeactiveBlock>
        )}
      </InboxMain>
    </InboxBlock>
  );
}
// 질문거리 너무 다 스타일 style을 주고 있다 ...
//  1.
// Form 에서 nested로 접근해서 줄 수 있나 ? 기본 tag는 되는데
//

const FlexWrapper = styled.div`
  display: flex;
`;

const CardBlock = styled.div`
  padding: 20px 15px;
`;

const InboxBlock = styled.section`
  ${layoutBase};
  margin-top: 40px;
  display: flex;
`;

const InboxAsdie = styled.div`
  display: flex;
  flex-direction: column;
`;

const InboxMain = styled.section`
  display: flex;
  flex: 1;
`;

const InboxActiveBlock = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e4e5ed;
  flex: 1;
`;

const InboxActiveMain = styled.div`
  display: flex;
  min-height: 560px;
`;

const InboxMessageBox = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
`;

const InboxBuddyDetailBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

const InboxMessageForm = styled.form`
  display: flex;
  flex: 1;
  border-top: 1px solid #e4e5ed;
  padding: 16px;
  flex-direction: column;
  & textarea {
    width: 100%;
    padding: 16px;
    height: 56px;
  }
`;

interface InboxMessageCardProps {
  isMine: boolean;
}

// const InboxMessageCard = styled.li`
//   padding: 16px;
//   height: 40px;
//   font-size: 14px;
//   color: ${(props: InboxMessageCardProps) => (props.isMine ? '#ffd440' : '#e4e5ed;')};
// `;

const InboxMessageFormFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InboxMessageUtilButtonsWrapper = styled.div`
  display: flex;
`;

const InboxMessageSubmitButton = styled.button`
  padding: 0 25px;
  height: 40px;
  font-size: 16px;
  color: ${(props) => (props.disabled ? '#9a9ba7' : '#303441')};
`;

const InboxDeactiveBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f6fa;
  border: 1px solid #e4e5ed;
  flex: 1;
`;

export default Inbox;
