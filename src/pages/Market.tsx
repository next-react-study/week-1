import React, { FC } from 'react';
import { Global, css } from '@emotion/core';
import baseCss from '../style/baseCss';
import SiteNavigation from '../components/SiteNavigation';



const Home:FC = () => {
    return (
        <>
            <Global styles={css`${baseCss}`} />
            <SiteNavigation/>
            
        </>
        
    )
}

export default Home;
