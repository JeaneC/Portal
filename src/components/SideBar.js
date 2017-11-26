import React from 'react';
import styled from 'styled-components';

import Home from '../assets/icons/home';
import Flight from '../assets/icons/aircraft-take-off';
import Key from '../assets/icons/key';
import Tours from '../assets/icons/map';

const SideBar = () => {
  const Navigation = styled.nav`
    background-color: var(--color-grey-dark-1);

    flex: 0 0 18%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `

  const SideNav = styled.ul`
    padding: 0;
    font-size: 1.4rem;
    list-style: none;
    margin-top: 3.5rem;
  `

  const IconWrapper = styled.span`
    svg {
      width: 1.7rem;
      height:1.7rem;
      margin-right: 2rem;
      fill: currentColor;
    }
  `

  const NavLink = styled.a`
    &:link,
    &:visited {
      color: var(--color-grey-light-1);
      text-decoration: none;
      text-transform: uppercase;
      display: block;
      padding: 1.5rem 3rem;
      position: relative;
      z-index: 10;

      display: flex;
      align-items: center;
    }
  `

  const NavItem = styled.li`
    position: relative;

    &:not(:last-child) {
      margin-bottom: .5rem;
    }

    &:hover::before {
      transform: scaleY(1);
      width: 100%;
    }

    &:active::before {
      background-color: var(--color-primary-light);
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 3px;
      transform: scaleY(0);
      background-color: var(--color-primary);
      transition:
        transform .2s, 
        width .4s cubic-bezier(1,0,0,1), .2s,
        background-color .1s;
      ;
    }
  `

  const LegalContent = styled.div`
    font-size: 1.2rem;
    color: var(--color-grey-light-4);
    text-align: center;
    padding: 2.5rem;
  `

  return (
    <Navigation>
      <SideNav>
        <NavItem>
          <NavLink href="#">
            <IconWrapper>
              <Home />
            </IconWrapper>
            <span>Hotel</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <IconWrapper>
              <Flight />
            </IconWrapper>
            <span>Flight</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <IconWrapper>
              <Key />
            </IconWrapper>
            <span>Car Rental</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <IconWrapper>
              <Tours />
            </IconWrapper>
            <span>Tours</span>
          </NavLink>
        </NavItem>
      </SideNav>

      <LegalContent>
        &copy; 2017 by Portal. All rights reserved.
      </LegalContent>

    </Navigation>
  )
}

export default SideBar;
