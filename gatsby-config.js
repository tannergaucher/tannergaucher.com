module.exports = {
  siteMetadata: {
    title: `Tanner Gaucher`,
    titleTemplate: `Tanner G`,
    subtitle: `Software Developer`,
    description: `Web Development Blog && Personal Portfolio`,
    url: `https://www.tannergaucher.com`,
    image: `/images/embed.png`,
    twitterUsername: `tanner`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 760,
            },
          },
          {
            resolve: `gatsby-remark-copy-images`,
            options: {
              maxWidth: 760,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-132758873-1`,
      },
    },
    // 'gatsby-plugin-offline',
    // `gatsby-remark-copy-linked-files`,
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
