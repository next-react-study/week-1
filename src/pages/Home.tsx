import React, { FC } from 'react';
import { Global, css } from '@emotion/core'
import baseCss from '../style/baseCss'



const Home:FC = () => {
    return (
        <>
            <Global styles={css`${baseCss}`} />
            <div>Home</div>
        </>
        
    )
}

export default Home;
