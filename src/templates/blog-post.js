import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Layout from '../components/layout'
import Container from '../components/styles/Container'
import SEO from '../components/SEO'

import Link from '../components/styles/Link'

import Pre from '../components/styles/Pre'

import { Heading, Text, Box } from 'rebass'

export default ({ data, pageContext }) => {
  const { next, previous } = pageContext

  const {
    code: { body },
    frontmatter: {
      title,
      date,
      intro,
      featuredImage: {
        childImageSharp: { sizes },
      },
    },
    fields: { slug },
  } = data.mdx

  return (
    <Layout>
      <SEO
        title={title}
        description={intro || 'nothing'}
        pathname={slug}
        article={true}
      />
      <Container>
        <article>
          <Heading fontSize={[5, 6]}>{title}</Heading>
          <Img sizes={sizes} />
          <Pre fontSize={[1, 2]}>{date}</Pre>
          <MDXRenderer>{body}</MDXRenderer>

          {next && (
            <>
              <Link to={next.fields.slug}>
                <Heading fontSize={[1, 2]} css={{ textTransform: 'uppercase' }}>
                  Next
                </Heading>
                <Text fontSize={[1, 2]}>{next.frontmatter.title}</Text>
              </Link>
            </>
          )}
          {previous && (
            <Link to={previous.fields.slug}>
              <Heading fontSize={[1, 2]} css={{ textTransform: 'uppercase' }}>
                Previous
              </Heading>
              <Text fontSize={[1, 2]}>{previous.frontmatter.title}</Text>
            </Link>
          )}
        </article>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      code {
        body
      }
      frontmatter {
        title
        date(formatString: "MM/DD/YY")
        intro
        featuredImage {
          childImageSharp {
            sizes {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`
