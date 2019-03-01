import React from 'react'
import styled from 'styled-components'
import Link from '../components/styles/Link'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  height: 60px;

  h5 {
    margin: 0;
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier;
  }

  .first {
    align-self: end;
    line-height: 1;
  }

  .first,
  .last {
    font-weight: 100;
    letter-spacing: -0.03em;
    line-height: 0.68;
  }

  .left {
    display: grid;
    grid-template-rows: 1fr 1fr;
    margin-left: 1em;
    margin-top: 1em;
  }
`

const Header = () => (
  <StyledHeader>
    <div className="left">
      <Link to="/" inherit="true">
        <h5 className="first">Tanner</h5>
        <h5 className="last">Gaucher</h5>
      </Link>
    </div>
  </StyledHeader>
)

export default Header
