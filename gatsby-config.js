module.exports = {
  siteMetadata: {
    title: 'Agile Links',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    }
  ],
  pathPrefix: 'agile-static'
}
