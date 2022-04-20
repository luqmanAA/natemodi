/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-react-helmet", "gatsby-plugin-netlify-cms",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/pages/favicon.png',
      },
    },
  ],
}
