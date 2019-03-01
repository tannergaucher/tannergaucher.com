import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Layout from '../components/layout'
import Container from '../components/styles/Container'
import Pre from '../components/styles/Pre'
import SEO from '../components/SEO'

const Styled = styled.article`
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
  }
  .title {
    margin-top: 0;
  }

  .date {
    margin-top: 0;
    margin-bottom: 5em;
  }

  @media (max-width: 400px) {
  }
`

export default ({ data, pageContext }) => {
  const { next, previous } = pageContext
  const {
    code: { body },
    frontmatter: { title, date, intro },
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
        <Styled>
          <h1 className="title">{title}</h1>
          <Pre className="date">{date}</Pre>
          <MDXRenderer>{body}</MDXRenderer>
        </Styled>
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
      }
      fields {
        slug
      }
    }
  }
`
