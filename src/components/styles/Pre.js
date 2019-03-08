import React from 'react'
import { Text } from 'rebass'

const Pre = props => (
  <Text
    {...props}
    as="pre"
    fontFamily="SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier,
  monospace"
    p={2}
    color="#959da5"
  />
)

export default Pre
