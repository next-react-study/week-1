import React, { FC } from 'react'
import styled from '@emotion/styled'

const StyledSiteNavigation = styled.div`
  display: flex;
  justify-content: space-between;
`

const SiteNavigation: FC = () => {
    return (
        <StyledSiteNavigation>This my button component.</StyledSiteNavigation>
    )
}

export default SiteNavigation
