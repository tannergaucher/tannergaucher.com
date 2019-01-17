import React from 'react'
import { render } from 'react-testing-library'
import renderer from 'react-test-renderer'
import Post from '../Post'

describe(`<Post/>`, () => {
  const props = {
    title: 'hello world',
    date: '10.25.2018',
    slug: 'fake-post-slug',
    intro: 'fake intro sentence',
  }
  it(`renders and matches snapshot`, () => {
    const tree = renderer.create(<Post {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it(`renders a post title`, () => {
    const { getByText } = render(<Post {...props} />)
    const testTitle = getByText(props.title)
    expect(testTitle).toBeInTheDocument()
    expect(testTitle).toHaveTextContent(props.title)
  })
  it(`renders an intro sentence`, () => {
    const { getByText } = render(<Post {...props} />)
    const testIntro = getByText(props.intro)
    expect(testIntro).toBeInTheDocument()
    expect(testIntro).toHaveTextContent(props.intro)
  })
  it(`renders a post date`, () => {
    const { getByText } = render(<Post {...props} />)
    const testDate = getByText(props.date)
    expect(testDate).toBeInTheDocument()
    expect(testDate).toHaveTextContent(props.date)
  })
})
