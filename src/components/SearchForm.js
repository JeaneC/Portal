import React from 'react';
import styled from 'styled-components';

import MagnifyingGlassSVG from '../assets/icons/magnifying-glass';

const SearchForm = () => {
  const FormWrapper = styled.form`
    flex: 0 0 40%;

    display: flex;
    align-items: center;
    justify-content: center;

    &input:focus + &button {
      background-color: var(--color-grey-light-3);
    }
  `

  const Input = styled.input`
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background-color: var(--color-grey-light-2);
    border: none;
    padding: .7rem 2rem;
    border-radius: 100px;
    width: 85%;
    margin-right: -3.7rem;
    transition: all .2s;

    &:focus {
      outline: none;
      width: 90%;
      background-color: var(--color-grey-light-3);
    }

    &::-webkit-input-placeholder {
      font-weight: 100;
      color: var(--color-grey-light-4);
    }

  `
  const IconWrapper = styled.span`
    svg {
      fill: var(--color-grey-dark-3);
    }
  `

  const SearchButton = styled.button`
    border: none;
    background-color: var(--color-grey-light-2);

    &:focus {
      outline: none;
    }

    &:active {
      transform: translateY(2px);
    }
  `
  return (

    <FormWrapper action="#">
      <Input type="text" placeholder="Search hotels" />
      <SearchButton>
        <IconWrapper>
          <MagnifyingGlassSVG />
        </IconWrapper>
      </SearchButton>
    </FormWrapper>
  )
}

export default SearchForm
