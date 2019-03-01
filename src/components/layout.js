import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../utils/theme'
import Header from '../components/Header'
import SEO from '../components/SEO'

const Inner = styled.div`
  min-height: calc(100vh - 60px);
`

export default ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <>
        <SEO />
        <GlobalStyle />
        <Header />
        <Inner>{children}</Inner>
      </>
    </ThemeProvider>
  </>
)

/* prettier-ignore */
const GlobalStyle = createGlobalStyle`

  @import url('https://rsms.me/inter/inter.css');




  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: ${props => props.theme.background};
    color: ${props => props.theme.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: calc(17px + 0.4vw);
  }

  h1 {
    font-size: 42px;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'Inter var', sans-serif;
    letter-spacing: .03em;
    font-weight: 600;
  }

  p {
    line-height: 1.5;
    margin-bottom: 3em;
  }
`
