/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    siteUrl: `https://natemodi.com`,
  },
  plugins: [
    "gatsby-plugin-react-helmet", "gatsby-plugin-netlify-cms",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/pages/favicon.png',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: `markdown-pages`,
      },
    },
    `gatsby-transformer-remark`
  ],
}
