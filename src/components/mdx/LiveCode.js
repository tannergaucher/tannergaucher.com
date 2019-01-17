import React from 'react'
import styled from 'styled-components'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

export default ({ code, scope }) => (
  <StyledLiveCode>
    <LiveProvider code={code} scope={scope} noInline={true}>
      <LivePreview />
      <LiveEditor />
      <LiveError />
    </LiveProvider>
  </StyledLiveCode>
)

const StyledLiveCode = styled.div`
  .react-live {
    margin: 1em 0;
  }
  .react-live-preview {
    margin: 1em 0;
  }
  .prism-code {
    margin-top: 2em;
    background: #141414;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
    font-family: Inconsolata, 'SF Mono', 'Roboto Mono', Menlo, monospace;
    font-size: 20px;
  }
`
