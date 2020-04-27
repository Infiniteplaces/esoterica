const Promise = require("bluebird")
const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const articleTemplate = path.resolve(
      "./src/components/resources/articleTemplate.js"
    )
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
          console.log(result.errors)
          reject(result.errors)
        }
        const library = result.data.allContentfulLibrary.edges
        library.forEach(post => {
          createPage({
            path: `/resources/library/${post.node.slug}/`,
            component: articleTemplate,
            context: {
              slug: post.node.slug,
              postType: "library",
            },
          })
        })
        const glossary = result.data.allContentfulGlossary.edges
        glossary.forEach(post => {
          createPage({
            path: `/resources/glossary/${post.node.slug}/`,
            component: articleTemplate,
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
