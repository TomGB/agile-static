const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Agile Links',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join(__dirname, `data`),
      },
    },
    `gatsby-transformer-json`
  ],
  pathPrefix: 'agile-static'
}
