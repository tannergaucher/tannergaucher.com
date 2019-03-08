const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const componentWithMDXScope = require('gatsby-mdx/component-with-mdx-scope')
const _ = require('lodash')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMdx(
          sort: { order: DESC, fields: [frontmatter___date] },
          ${
            process.env.NODE_ENV === 'production'
              ? 'filter: {frontmatter: {draft: {ne: true}}}'
              : ''
          }
          ) {
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
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
            previous {
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `)
      .then(result => {
        const { edges } = result.data.allMdx

        edges.forEach(edge => {
          const {
            node: {
              fields: { slug },
              code: { scope },
            },
            next,
            previous,
          } = edge

          createPage({
            path: slug,
            component: componentWithMDXScope(
              path.resolve(`./src/templates/blog-post.js`),
              scope,
              __dirname
            ),
            context: {
              slug,
              next: next || '',
              previous: previous || '',
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

    createNodeField({
      node,
      name: `draft`,
      value: node.frontmatter.draft,
    })

    createNodeField({
      node,
      name: `resources`,
      value: node.frontmatter.resources,
    })

    createNodeField({
      node,
      name: `featuredImage`,
      value: node.frontmatter.featuredImage,
    })
  }
}

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
