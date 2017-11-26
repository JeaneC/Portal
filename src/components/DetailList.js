import React from 'react';
import styled from 'styled-components';

import Chevron from '../assets/icons/chevron-thin-right';
import DetailListItem from './DetailListItem';

const DetailList = () => {
  const List = styled.ul`
    list-style:none;
    margin: 3rem 0;
    padding: 3rem 0;
    border-top: var(--line);
    border-bottom: var(--line);

    display: flex;
    flex-wrap: wrap;
  `

  return (
    <List>
      <DetailListItem>Hotel accomodation</DetailListItem>
      <DetailListItem>Breakfast included</DetailListItem>
      <DetailListItem>Free airport shuttle</DetailListItem>
      <DetailListItem>Free wifi in all rooms</DetailListItem>
      <DetailListItem>Air conditioning and heating</DetailListItem>
      <DetailListItem>Pets allowed</DetailListItem>
      <DetailListItem>We speak all languages</DetailListItem>
      <DetailListItem>Perfect for families</DetailListItem>
    </List>
  )
}

export default DetailList;
