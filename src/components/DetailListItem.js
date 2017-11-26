import React from 'react';
import styled from 'styled-components';

import Chevron from '../assets/icons/chevron-thin-right';

const DetailListItem = (props) => {
  const ListItem = styled.li`
    flex: 0 0 50%;
    margin-bottom: .7rem;

  `
  const ChevronIconWrapper = styled.span`
    svg {
      display: inline-block;
      height: 1rem;
      width: 1rem;
      margin-right: .7rem;

      fill: var(--color-primary)
    }
  `
  const Icon = () => (
    <ChevronIconWrapper>
      <Chevron />
    </ChevronIconWrapper>
  )


  return (
    <ListItem>
      <Icon />
      {props.children}
    </ListItem>
  )
}

export default DetailListItem
