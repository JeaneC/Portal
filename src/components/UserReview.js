import React from 'react';
import styled from 'styled-components';

import User1 from '../assets/img/user-2.jpg';
import User2 from '../assets/img/user-3.jpg';

const UserReview = () => {
  const Container = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
  `

  const Review = styled.figure`
    background-color: #fff;
    box-shadow: var(--shadow-light);
    padding: .3rem;
    margin: 0;
    margin-bottom: 3.5rem;

  `

  const Quote = styled.blockquote`
    margin: 0 auto;
    padding: 1.8rem;
    font-size: 1.2rem;
  `

  const Caption = styled.figcaption`
    display: flex;
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    align-items: center;
  `

  const CaptionPhoto = styled.img`
    height: 4.5rem;
    width: 4.5rem;
    border-radius: 50%;
    margin-right: 1.5rem;
  `

  const ReviewBox = styled.div`
    margin-right: auto;
  `

  const ReviewName = styled.p`
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: .2rem;
  `

  const ReviewDate = styled.p`
    margin-top: 0;
    font-size: 1rem;
    color: var(--color-grey-dark-3);
  `

  const Rating = styled.div`
    color: var(--color-primary);
    font-size: 2.2rem;
    font-weight: 300;
  `

  const MoreButton = styled.button`
    border: none;
    color: var(--color-primary);
    font-size: inherit;
    border-bottom: 1px solid currentColor;
    padding-bottom: 2px;
    display: inline-block;
    background-color: transparent;
    cursor: pointer;
    transition: all .2s;

    span {
      margin-left: 3px;
      transition: margin-left .2s;
    }

    &:hover {
      color: var(--color-grey-dark-1);

      span {
        margin-left: 8px;
      }
    }

    &:focus {
      outline: none;

    }
  `



  return (
    <Container>
      <Review>
        <Quote>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugo dolormeque architecto dicta
          animi, totam, itaque officia ex.
        </Quote>
        <Caption>
          <CaptionPhoto src={User2} />
          <ReviewBox>
            <ReviewName>Nick Smith</ReviewName>
            <ReviewDate>Feb 23rd, 2017</ReviewDate>
          </ReviewBox>
          <Rating>7.8</Rating>
        </Caption>
      </Review>

      <Review>
        <Quote>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugo dolormeque architecto dicta
          animi, totam, itaque officia ex.
        </Quote>
        <Caption>
          <CaptionPhoto src={User1} />
          <ReviewBox>
            <ReviewName>Marry Thomas</ReviewName>
            <ReviewDate>Septh 13, 2017</ReviewDate>
          </ReviewBox>
          <Rating>9.3</Rating>
        </Caption>
      </Review>
      <MoreButton>
        Show all <span>&rarr;</span>
      </MoreButton>
    </Container>
  )
}

export default UserReview
