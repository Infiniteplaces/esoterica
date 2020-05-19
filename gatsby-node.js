const Promise = require("bluebird")
const path = require("path")
const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allContentfulGlossary {
              totalCount
              edges {
                node {
                  title
                  slug
                }
              }
            }
            allContentfulLibrary {
              totalCount
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log("ERROR" + result.errors)
          reject(result.errors)
        }
        const library = result.data.allContentfulLibrary.edges
        paginate({
          createPage,
          items: library,
          itemsPerPage: 12,
          pathPrefix: "/resources/library",
          component: path.resolve("src/templates/libraryIndex.js"),
        })
        library.forEach(post => {
          createPage({
            path: `/resources/library/${post.node.slug}/`,
            component: path.resolve(
              "src/components/resources/articleTemplate.js"
            ),
            context: {
              slug: post.node.slug,
              postType: "library",
            },
          })
        })
        const glossary = result.data.allContentfulGlossary.edges
        glossary.forEach(post => {
          createPage({
            path: `/resources/white-papers/${post.node.slug}/`,
            component: path.resolve(
              "src/components/resources/articleTemplate.js"
            ),
            context: {
              slug: post.node.slug,
              postType: "glossary",
            },
          })
        })
      })
    )
  })
}
