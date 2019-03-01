import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Link from '../components/styles/Link'

import Time from '../components/styles/Time'
import Container from '../components/styles/Container'

export default ({ data }) => {
  const { edges } = data.allMdx
  return (
    <Layout>
      <StyledIndex>
        <Container>
          {edges.map(post => {
            const { title, date, intro } = post.node.frontmatter
            const { slug } = post.node.fields
            return (
              <Link to={slug} key={post.node.id} inherit="true">
                <div className="post">
                  <Time className="post-date">{date}</Time>
                  <h6 className="post-time">
                    <Time>{post.node.timeToRead} Min</Time>
                  </h6>
                  <h2 className="post-title">{title}</h2>
                  <div className="post-intro">{intro}</div>
                </div>
              </Link>
            )
          })}
        </Container>
      </StyledIndex>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            intro
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

const StyledIndex = styled.div`
  .post {
    display: grid;
    grid-gap: 2.5px;
    grid-template-columns: 8fr 8fr 100px;
    padding: 1rem;
    line-height: 1;
    transition: 0.3s;
    margin-bottom: 0.5em;
    border-radius: 3px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: scale(1.02);
      transition: 0.3;
    }
  }
  .post-date {
    align-self: end;
    margin: 0;
  }
  .post-title {
    margin: 0;
    grid-column: 1 / 3;
  }
  .post-time {
    margin: 0;
    grid-column: 3;
    justify-self: end;
    align-self: end;
    font-weight: 400;
    font-size: 16px;
  }
  .post-intro {
    grid-column: 1 / 3;
    align-self: center;
    font-weight: 400;
  }

  @media (max-width: 400px) {
    .post {
      grid-gap: 25px;
    }
    .post-title {
      grid-column: 1 / -1;
    }
  }
`
