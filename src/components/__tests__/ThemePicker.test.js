import React from 'react'
import { render } from 'react-testing-library'
import renderer from 'react-test-renderer'
import ThemePicker from '../ThemePicker'

describe('<ThemePicker/>', () => {
  it('renders correctly and matches the snapshot', () => {
    // props here
    const tree = renderer.create(<ThemePicker />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders an svg image', () => {})
})
