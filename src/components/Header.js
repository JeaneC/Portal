import React from 'react';
import styled from 'styled-components';

const Header = () => {
  const Container = styled.div`
    height: 7rem;
    background-color: #fff;
    border-bottom: var(--color-grey-light-2);
  `

  return (
    <Container>
      Hello
    </Container>
  )
}

export default Header;
