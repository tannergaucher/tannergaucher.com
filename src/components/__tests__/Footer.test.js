import React from 'react'
import renderer from 'react-test-renderer'
import { PureFooter as Footer } from '../Footer'

/* 
Problem: How to test components that use gatsby <Link /> ?

Solution: 

*/

describe(`<Footer/>`, () => {
  it(`renders correctly and matches the snapshot`, () => {
    const data = {
      site: {
        siteMetadata: {
          title: 'Tanner Gaucher',
        },
      },
    }

    const tree = renderer.create(<Footer data={data} />).toJSON()
    console.debug(<Footer />)
    expect(tree).toMatchSnapshot()
  })
})
