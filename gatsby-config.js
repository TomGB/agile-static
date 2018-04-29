module.exports = {
  siteMetadata: {
    title: 'Agile Links',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data`,
        name: 'data'
      }
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-json'
  ],
  pathPrefix: 'agile-static'
}
