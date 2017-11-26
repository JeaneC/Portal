import React from 'react';
import styled from 'styled-components';

import Bookmark from '../assets/icons/bookmark';
import IconChat from '../assets/icons/chat';
import userImg from '../assets/img/user-2.jpg';

const NavBar = () => {
  const Navigation = styled.nav`
    display: flex;
    align-items: center;
    align-self: stretch;

    & > * {
      padding: 0 2rem;
      cursor: pointer;
      height: 100%;
      display: flex;
      align-items: center;
    }
    & > *:hover {
      background-color: var(--color-grey-light-2 )
    }
  `

  const IconBox = styled.div`
    position: relative;
  `

  const UserBox = styled.div`

  `

  const UserPhoto = styled.img`
    height: 3.75rem;
    border-radius: 50%;
    margin-right: 1rem;
  `

  const UserName = styled.span`

  `

  const IconWrapper = styled.span`
    svg {
      height: 2.5rem;
      width: 2.5rem;
      fill: var(--color-grey-dark-2);
    }
  `

  const Notification = styled.span`
    font-size: .8rem;
    height: 1.75rem;
    width: 1.75rem;
    border-radius: 50%;
    background-color: var(--color-primary);
    color: #fff;
    position: absolute;
    top: 1.1rem;
    right: 1.2rem;

    display: flex;
    justify-content: center;
    align-items: center;
  `

  return (
    <Navigation>
      <IconBox>
        <IconWrapper>
          <Bookmark />
        </IconWrapper>

        <Notification>7</Notification>
      </IconBox>
      <IconBox>
        <IconWrapper>
          <IconChat />
        </IconWrapper>
        <Notification>13</Notification>
      </IconBox>
      <UserBox>
        <UserPhoto src={userImg} />
        <UserName>Name</UserName>
      </UserBox>
    </Navigation>
  )
}

export default NavBar;
