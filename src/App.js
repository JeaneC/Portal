import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';

import Header from './components/Header';
import Content from './components/Content';

class App extends Component {
  componentDidMount() {
    this.normalizeCSS()
  }

  normalizeCSS() {
    injectGlobal`
      @import url('https://fonts.googleapis.com/css?family=Open+Sans');

      :root {
        --color-primary: #eb2f64;
        --color-primary-light: #FF3366;
        --color-primary-dark: #BA265D;

        --color-grey-light-1: #faf9f9;
        --color-grey-light-2: #f4f2f2;
        --color-grey-light-3: #f0eeee;
        --color-grey-light-4: #ccc;

        --color-grey-dark-1: #333;
        --color-grey-dark-2: #777;
        --color-grey-dark-3: #999;

        --shadow-dark: 0 2rem 6rem rgba(0,0,0,.3);
        --shadow-light: 0 2rem 5rem rgba(0,0,0,.2);

        --line: 1px solid var(--color-grey-light-2);

      }

      *,
      *::after,
      *::before, {
        margin: 0;
        padding: 0;
        box-sizing: inherit;

      }

      html {
        box-sizing: border-box;
        font-size: 62.5%
      }

      body {
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        line-height: 1.6;
        color: var(--color-grey-dark-2);
        background-image: linear-gradient(
          to right bottom,
          var(--color-primary-light),
          var(--color-primary-dark));
        background-repeat: no-repeat;

        min-height: 100vh;
      }
    `

  }

  render() {
    const Container = styled.div`
      max-width: 120rem;
      background-color: var(--color-grey-light-2);
      box-shadow: var(--shadow-dark);
      margin: 8rem auto;

      min-height: 50rem;
    `
    return (
      <Container>
        <Header />
        <Content />
      </Container>
    );
  }
}

export default App;
