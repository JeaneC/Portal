import React from 'react';
import styled, { keyframes } from 'styled-components';

import DetailList from './DetailList';

import hotel1 from '../assets/img/hotel-1.jpg';
import hotel2 from '../assets/img/hotel-2.jpg';
import hotel3 from '../assets/img/hotel-3.jpg';
import friendPhoto1 from '../assets/img/user-3.jpg';
import friendPhoto2 from '../assets/img/user-4.jpg';
import friendPhoto3 from '../assets/img/user-5.jpg';
import friendPhoto4 from '../assets/img/user-6.jpg';


import Star from '../assets/icons/star';
import LocationPin from '../assets/icons/location-pin';

const Main = () => {
  const pulsate = keyframes`
    0% {
      transform: scale(1);
      box-shadow: none;
    }

    50% {
      transform: scale(1.05);
      box-shadow: 0 1rem 4rem rgba(0,0,0,.25);
    }

    100% {
      transform: scale(1);
      box-shadow: none;
    }
  `

  const Frame = styled.main`
    background-color: #fff;
    flex: 1;

  `

  const Gallery = styled.div`
    display: flex;
  `

  const Photo = styled.img`
    width: 100%;
    display: block;
  `

  const Figure = styled.figure`
    margin: 0 auto;
    padding: 0;
  `

  const Overview = styled.div`
    display: flex;
    align-items: center;
    border-bottom: var(--line);

    svg {
      width: 1.75rem;
      height: 1.75rem;
      fill: var(--color-primary);
    }
  `

  const OverviewHeading = styled.h1`
    font-size: 2.25rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0;
    padding: 1.5rem 2rem;
  `

  const OverviewStars = styled.div`
    margin-right: auto;
    display: flex;
    align-items: center;
  `

  const OverviewLocation = styled.div`
    font-size: 1.2rem;
    display: flex;
    align-items: center;
  `

  const Button = styled.button`
    border: none;
    color: var(--color-primary);
    font-size: inherit;
    border-bottom: 1px solid currentColor;
    padding-bottom: 2px;
    display: inline-block;
    background-color: transparent;
    cursor: pointer;
    transition: all .2s;

    &:hover {
      color: var(--color-grey-dark-1);
      animation: ${pulsate} 1s infinite;
    }

    &:focus {
      outline: none;

    }
  `

  const OverviewRatings = styled.div`
    background-color: var(--color-primary);
    color: #fff;
    margin-left: 3rem;
    padding: 0 2.25rem;
    align-self: stretch;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `

  const RatingAverage = styled.div`
    font-size: 2.25rem;
    font-weight: 300;
    margin-bottom: -3px;

  `
  const RatingCount = styled.div`
    font-size: .8rem;
    text-transform: uppercase;
  `

  const IconLocationWrapper = styled.span`
    margin-right: .5rem;
  `

  const Detail = styled.div`
    display: flex;
    padding: 4.5rem;
    background-color: var(--color-grey-light-1);
    border-bottom: var(--line);
  `

  const Description = styled.div`
    font-size: 1.4rem;
    background-color: #fff;
    box-shadow: var(--shadow-light);
    padding:  3rem;
    flex: 0 0 60%;
    margin-right: 4.5rem;
  `

  const UserReview = styled.div`
    background-color: yellowgreen;
    flex: 1;
  `

  const Paragraph = styled.p`

  `
  const Paragraph2 = styled.p`
    margin-bottom: 0;
  `






  const Reccomend = styled.div`
    font-size: 1.3rem;
    color: var(--color-grey-dark-3);

    display: flex;
    align-items: center;
  `

  const ReccomendCount = styled.p`
    margin-right: auto;
  `
  const ReccomendFriends = styled.div`

  `

  const ReccomendPhoto = styled.img`
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    border: 2px solid #fff;

    &:not(:last-child) {
      margin-right: -1.5rem;
    }
  `

  return (
    <Frame>
      <Gallery>
        <Figure>
          <Photo src={hotel1} />
        </Figure>
        <Figure>
          <Photo src={hotel2} />
        </Figure>
        <Figure>
          <Photo src={hotel3} />
        </Figure>
      </Gallery>

      <Overview>
          <OverviewHeading>
            Hotel Las Palmas
          </OverviewHeading>
          <OverviewStars>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </OverviewStars>

        <OverviewLocation>
          <IconLocationWrapper>
            <LocationPin />
          </IconLocationWrapper>

          <Button>Albufeira, Portugal</Button>
        </OverviewLocation>
        <OverviewRatings>
          <RatingAverage>
            8.6
          </RatingAverage>
          <RatingCount>
            429
          </RatingCount>
        </OverviewRatings>
      </Overview>


      <Detail>
        <Description>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce purus eros, vestibulum id lacinia ut, interdum sed libero. Etiam ac cursus massa. Mauris scelerisque magna orci, et convallis sapien tempor sodales.
          </Paragraph>
          <Paragraph2>
            Vestibulum congue enim quis porttitor hendrerit. Morbi varius congue augue, sit amet porta justo iaculis eu.
          </Paragraph2>
          <DetailList>
          </DetailList>
          <Reccomend>
            <ReccomendCount>
              Lucy and 3 other friends recommend this hotel
            </ReccomendCount>
            <ReccomendFriends>
              <ReccomendPhoto src={friendPhoto1} />
              <ReccomendPhoto src={friendPhoto2} />
              <ReccomendPhoto src={friendPhoto3} />
              <ReccomendPhoto src={friendPhoto4} />
            </ReccomendFriends>
          </Reccomend>
        </Description>
        <UserReview>

        </UserReview>
      </Detail>
    </Frame>
  )
}

export default Main;
