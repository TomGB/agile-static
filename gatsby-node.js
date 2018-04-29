const path = require('path')
const postTemplate = path.resolve('src/templates/blog.js');
const indexTemplate = path.resolve('src/templates/index.js');
const complexTemplate = path.resolve('src/templates/complex.js');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return graphql(`{
    allTweetsJson {
      edges {
        node {
          from
          date
          tags
          text
          searchResults {
            title
            description
            href
          }
          index
        }
      }
    }
  }`).then (res => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    createPage({
      path: `/`,
      component: indexTemplate
    })

    createPage({
      path: `/complex`,
      component: complexTemplate
    })

    res.data.allTweetsJson.edges.forEach((_, index) => {
      createPage({
        path: `/post/${index}`,
        component: postTemplate,
        context: {
          index: index
        }
      })
    })
  })
}
