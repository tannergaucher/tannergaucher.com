import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Link from '../components/styles/Link'

const StyledFooter = styled.div`
  height: 10px;
  background: grey;
`

const Footer = () => <StyledFooter />

export default Footer
