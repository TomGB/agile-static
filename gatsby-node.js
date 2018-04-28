const createPaginatedPages = require("gatsby-paginate");
const data = require('./data/data_out.json');
const path = require('path');

exports.createPages = ({ boundActionCreators: { createPage } }) => {

  // createPaginatedPages({
  //   edges: data,
  //   createPage: createPage,
  //   pageTemplate: "src/templates/index.js",
  //   pageLength: 15, // This is optional and defaults to 10 if not used
  //   pathPrefix: "", // This is optional and defaults to an empty string if not used
  //   context: {} // This is optional and defaults to an empty object if not used
  // });
  data.map((item, index) => {
    createPage({
      path: '/'+index,
      component: path.resolve(`./src/pages/index.js`),
      context: {
        id: index
      }
    });
  });
};
