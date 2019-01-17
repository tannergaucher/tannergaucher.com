import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const MyLink = styled(Link)`
  color: ${props => (props.inherit ? 'inherit' : props.theme.href)};
  text-decoration: none;
`
export default MyLink
