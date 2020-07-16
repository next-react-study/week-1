import React, { FC } from 'react';
import { Global, css } from '@emotion/core';
import baseCss from '../style/baseCss';
import Header from '../components/Layout/Header';
import Inbox from '../components/Inbox';

const Home: FC = () => {
  return (
    <>
      <Global
        styles={css`
          ${baseCss}
        `}
      />
      <Header />
      <Inbox active />
    </>
  );
};

export default Home;
