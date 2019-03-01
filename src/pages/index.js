import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Link from '../components/styles/Link'

import Container from '../components/styles/Container'
import Pre from '../components/styles/Pre'

const Styled = styled.div`
  .post {
    display: grid;
    grid-gap: 10px;
    grid-template-areas:
      'date . time'
      'title title title'
      'intro intro intro';
    line-height: 1.1;
    transition: 0.3s;
    margin-bottom: 3em;

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
  const { edges } = data.allMdx
  return (
    <Layout>
      <Container>
        <Styled>
          {edges.map(post => {
            const {
              id,
              timeToRead,
              frontmatter: { title, date, intro },
              fields: { slug },
            } = post.node
            return (
              <Link to={slug} key={id} inherit="true">
                <div className="post">
                  <Pre className="date">{date}</Pre>
                  {/*  <Pre className="time">{timeToRead} Min</Pre> */}
                  <h3 className="title">{title}</h3>
                  {/* <h6 className="intro">{intro}</h6> */}
                  <Pre className="intro">{intro}</Pre>
                </div>
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
            date(formatString: "MM/DD/YY")
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
