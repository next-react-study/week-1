import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Main from './components/Main';
import Footer from './components/Footer';
import { IUserProps } from './type/user';

function App() {
    const [focusedUser, setFocusedUser] = useState<IUserProps | null>(null);
    const clickUserHandler = (user: IUserProps): void => {
        setFocusedUser(user);
    };

    return (
        <AppContainer>
            <Header />
            <SectionBlock>
                <SideBar
                    focusedUser={focusedUser}
                    clickUserHandler={clickUserHandler}
                />
                <DetailWrapper>
                    <Main focusedUser={focusedUser} />
                    <Footer />
                </DetailWrapper>
            </SectionBlock>
        </AppContainer>
    );
}


const AppContainer = styled.div`
    flex-direction: column;
    display: flex;
    
    
`;

const SectionBlock = styled.section`
    height: 800px;
    width: 1170px;
    margin: auto;
    display: flex;
    border: 1px solid red;
    margin-top: 40px;
`;

const DetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export default App;
