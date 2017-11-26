import React from 'react';
import styled from 'styled-components';

import logoImg from '../assets/img/logo.png';

import SearchForm from './SearchForm';
import NavBar from './NavBar';

const Header = () => {
  const Container = styled.div`
    font-size: 1.4rem;
    height: 7rem;
    background-color: #fff;
    border-bottom: var(--line);

    display: flex;
    justify-content: space-between;
    align-items: center;
  `

  const Logo = styled.img`
    height: 3.25rem;
    margin-left: 3rem;
  `

  return (
    <Container>
      <Logo src={logoImg} />
      <SearchForm />
      <NavBar/>
    </Container>
  )
}

export default Header;
