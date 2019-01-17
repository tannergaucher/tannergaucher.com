// rafc snippet
import React from 'react'
import styled from 'styled-components'
import Link from '../components/styles/Link'
import github from '../images/github.png'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  height: 60px;

  h5 {
    margin: 0;
  }
  ul {
    list-style: none;
    display: flex;
  }
  .first {
    align-self: end;
    line-height: 1;
  }

  .first,
  .last {
    font-weight: 200;
    letter-spacing: -0.03em;
    line-height: 0.78;
  }

  .left {
    display: grid;
    grid-template-rows: 1fr 1fr;
    margin-left: 1em;
    margin-top: 1em;
  }

  .right {
    margin-right: 1em;
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
    {/* <div className="right">
      <ul>
        <li>
          <img src={github} height="20px" className="git" />
        </li>
      </ul>
    </div> */}
  </StyledHeader>
)

export default Header
