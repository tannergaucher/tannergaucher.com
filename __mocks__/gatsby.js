const React = require('react')
const gatsby = jest.requireActual('gatsby')

// mocks the graphql() func, <Link/> component, <StaticQuery/> component

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(({ to, ...rest }) =>
    React.createElement('a', {
      ...rest,
      href: to,
    })
  ),
  StaticQuery: jest.fn(),
}
