import React from 'react';
import styled from 'styled-components';

const SideBar = () => {
  const Navigation = styled.nav`
    background-color: var(--color-grey-dark-1);

    flex: 0 0 18%;
  `

  return (
    <Navigation>
      Hello
    </Navigation>
  )
}

export default SideBar;
