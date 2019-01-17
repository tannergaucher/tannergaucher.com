import React from 'react'
import renderer from 'react-test-renderer'
import { PureBio as Bio } from '../Bio'

describe('<Bio/>', () => {
  it(`renders correctly and matches the snapshot`, () => {
    const data = {
      site: {
        siteMetadata: {
          title: 'Tanner Gaucher',
        },
      },
    }
    const tree = renderer.create(<Bio data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
