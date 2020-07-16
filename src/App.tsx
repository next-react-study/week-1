import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";
import Card from "./Card";
import ChatBox from "./ChatBox";
import Avatar from "./Avatar";

function App() {
    return (
        <div className="App">
            <Container>
                <Global styles={globalStyles}></Global>
                <Aside>
                    <Card
                        nickName={"네몸고냥이"}
                        message={"견적드립니다."}
                        thumbnailUrl={
                            "https://d2v80xjmx68n4w.cloudfront.net/members/thumbs/st9mT1550453555.PNG"
                        }
                        status={"ORDER"}
                        isUnread
                    ></Card>
                    <Card nickName={"꾸뀨뀨뀨"} isUnread></Card>
                    <Card
                        nickName={"네몸고냥이"}
                        message={"답변이 늦어서 미안합니다. 사정이 있어서요."}
                        thumbnailUrl={
                            "https://d2v80xjmx68n4w.cloudfront.net/members/thumbs/xexGo1588131279.jpeg"
                        }
                    ></Card>
                    <Card
                        nickName={"네몸고냥이"}
                        message={"견적드립니다."}
                        thumbnailUrl={
                            "https://d2v80xjmx68n4w.cloudfront.net/members/thumbs/st9mT1550453555.PNG"
                        }
                    ></Card>
                    <Card nickName={"꾸뀨뀨뀨"} status={"ORDER"}></Card>
                    <Card
                        nickName={"네몸고냥이"}
                        message={"답변이 늦어서 미안합니다. 사정이 있어서요."}
                        thumbnailUrl={
                            "https://d2v80xjmx68n4w.cloudfront.net/members/thumbs/xexGo1588131279.jpeg"
                        }
                        isUnread
                    ></Card>
                    <Card
                        nickName={"네몸고냥이"}
                        message={"견적드립니다."}
                        thumbnailUrl={
                            "https://d2v80xjmx68n4w.cloudfront.net/members/thumbs/st9mT1550453555.PNG"
                        }
                    ></Card>
                    <Card nickName={"꾸뀨뀨뀨"} isUnread></Card>
                    <Card
                        nickName={"네몸고냥이"}
                        message={"답변이 늦어서 미안합니다. 사정이 있어서요."}
                        thumbnailUrl={
                            "https://d2v80xjmx68n4w.cloudfront.net/members/thumbs/xexGo1588131279.jpeg"
                        }
                    ></Card>
                </Aside>
                <Content>
                    <ChatBox
                        message={
                            "지난번과 같은 컨셉으로 캐리커처 의뢰드리려고 합니다 :)"
                        }
                        isMine={false}
                    />
                    <ChatBox
                        message={"잘부탁드리겠습니다. 중요한 건이라서요"}
                        isMine={false}
                    />
                    <ChatBox
                        message={"네 ! 작업 후 연락드리겠습니다~~~~~ㅎㅎ"}
                        isMine={true}
                    />
                </Content>
                <Profile>
                    <Avatar
                        src={
                            "https://d2v80xjmx68n4w.cloudfront.net/members/thumbs/st9mT1550453555.PNG"
                        }
                        size={"LARGE"}
                    ></Avatar>
                </Profile>
            </Container>
        </div>
    );
}

const globalStyles = css``;

const Container = styled.div`
    width: 980px;
    margin: 0 auto;
    height: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    display: flex;
`;

const Aside = styled.div`
    flex: 1;
    height: 100%;
    overflow: scroll;
`;

const Content = styled.div`
    flex: 2;
    background-color: white;
    padding: 16px;
    border-right: 1px solid #e4e5ed;
    border-left: 1px solid #e4e5ed;
`;

const Profile = styled.div`
    flex: 1;
    padding-top: 56px;
    background-color: white;
    display: flex;
    justify-content: center;
`;
export default App;
