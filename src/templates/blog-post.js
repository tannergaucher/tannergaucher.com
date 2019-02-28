import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Layout from '../components/layout'
import Container from '../components/styles/Container'
import Date from '../components/styles/Date'
import SEO from '../components/SEO'

export default ({ data, pageContext }) => {
  const { title, date, description, intro } = data.mdx.frontmatter
  const { next, previous } = pageContext
  return (
    <Layout>
      <SEO
        title={title}
        description={intro || 'nothing'}
        pathname={data.mdx.fields.slug}
        article={true}
      />
      <StyledPost>
        <Container>
          <h1 className="post-title">{title}</h1>
          <Date className="post-date">{date}</Date>
          <MDXRenderer>{data.mdx.code.body}</MDXRenderer>
          {/* refactor to component? */}
          {/* <div className="nav-links">
            {previous && (
              <Link to={previous.fields.slug}>
                <h6 className="nav-link prev"> {previous.fields.title}</h6>
              </Link>
            )}
            {next && (
              <Link to={next.fields.slug}>
                <h6 className="nav-link next">{next.fields.title}</h6>
              </Link>
            )}
          </div> */}
        </Container>
      </StyledPost>
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
        date
        intro
      }
      fields {
        slug
      }
    }
  }
`

const StyledPost = styled.article`
  .post-title {
    margin-top: 0;
  }

  .post-date {
    margin-top: 0;
    margin-bottom: 5em;
  }

  @media (max-width: 400px) {
    .nav-links {
      display: grid;
      grid-row: auto;

      > * {
        justify-self: center;
      }
    }
  }
`
