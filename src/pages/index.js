import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Link from '../components/styles/Link'

import Container from '../components/styles/Container'
import Pre from '../components/styles/Pre'

import { Heading } from 'rebass'

const Styled = styled.div`
  .post {
    display: grid;
    grid-gap: 0.5em;
    grid-template-areas:
      'date . time'
      'title title title'
      'intro intro intro';
    line-height: 1.1;
    transition: 0.3s;
    margin-bottom: 5em;

    &:hover {
      transform: scale(1.02);
      transition: 0.3;
    }
  }
  .date {
    grid-area: date;
    margin: 0;
  }
  .title {
    grid-area: title;
    margin: 0;
  }

  .time {
    grid-area: time;
    margin: 0;
    grid-column: 3;
    justify-self: end;
  }
  .intro {
    grid-area: intro;
    margin: 0;
    line-height: 1.4;
  }

  @media (max-width: 400px) {
    .post {
      grid-gap: 8px;
    }
  }
`

export default ({ data }) => {
  const { edges } = data.posts
  console.log(edges)
  return (
    <Layout>
      <Container>
        <Styled>
          {edges.map(post => {
            const {
              id,
              frontmatter: {
                title,
                date,
                intro,
                featuredImage: {
                  childImageSharp: { sizes },
                },
              },
              fields: { slug },
            } = post.node
            return (
              <Link to={slug} key={id} inherit="true">
                <div className="post">
                  <Pre className="date" fontSize={[1, 2]}>
                    {date}
                  </Pre>
                  <Heading className="title" fontSize={[3, 4]}>
                    {title}
                  </Heading>
                  <Pre className="intro" fontSize={[1, 2]}>
                    {intro}
                  </Pre>
                </div>
                {/* <Img sizes={sizes} /> */}
              </Link>
            )
          })}
        </Styled>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    posts: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          id
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
    }
    # image: file(absolutePath: {regex: {eq: "/me./jpg/"}}) {
    # avatar image
    # }
  }
`
