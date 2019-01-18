import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../utils/theme'
import '../utils/layout.css'
import Header from '../components/Header'

const Inner = styled.div`
  min-height: calc(100vh - 60px);
`

export default ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <Inner>{children}</Inner>
      </>
    </ThemeProvider>
  </>
)

/* prettier-ignore */
const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Fira+Mono|Fira+Sans');


  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: ${props => props.theme.background};
    color: ${props => props.theme.primary};
  }
`
