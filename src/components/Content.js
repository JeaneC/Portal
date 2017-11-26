import React from 'react';
import styled from 'styled-components';

import SideBar from './SideBar';
import Main from './Main';

const Content = () => {
  const FlexContainer = styled.div`
    display: flex;
  `

  return (
    <FlexContainer>
      <SideBar />
      <Main />
    </FlexContainer>
  )
}

export default Content;
