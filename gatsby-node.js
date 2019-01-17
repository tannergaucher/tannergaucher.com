const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const componentWithMDXScope = require('gatsby-mdx/component-with-mdx-scope')
const _ = require('lodash')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              fields {
                slug
              }
              code {
                scope
              }
            }
            next {
              fields {
                slug
                title
              }
            }
            previous {
              fields {
                slug
                title
              }
            }
          }
        }
      }
    `)
      .then(result => {
        const { edges } = result.data.allMdx
        edges.forEach(({ node }) => {
          createPage({
            path: node.fields.slug,
            component: componentWithMDXScope(
              path.resolve(`./src/templates/blog-post.js`),
              node.code.scope,
              __dirname
            ),
            context: {
              slug: node.fields.slug,
            },
          })
        })
        resolve()
      })
      .catch(reject => console.error(reject))
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })

    createNodeField({
      node,
      name: `title`,
      value: node.frontmatter.title,
    })
  }
}

//pages

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        $mdx: path.resolve(__dirname, 'src/components/mdx'),
      },
    },
  })
}
