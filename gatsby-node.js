const { slugify } = require('./src/util/utilityFunctions')
const path = require('path')
const authors = require('./src/util/author')

exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === 'MarkdownRemark') {
      const slugFromTitle = slugify(node.frontmatter.title)
      createNodeField({
        node,
        name: 'slug',
        value: slugFromTitle,
      })
    }
}

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const singlePostTemplate = path.resolve('src/templates/single-post.js')

    return graphql(`
        {
            allMarkdownRemark{
                edges{
                    node{
                        frontmatter{
                            author
                        }
                        fields{
                            slug
                        }
                    }
                }
            }
        }
    `).then(res => {
        if(res.errors) return Promise.reject(res.errors)

        const posts = res.data.allMarkdownRemark.edges

        posts.forEach(({node}) => {
            createPage({
                path: node.fields.slug,
                component: singlePostTemplate,
                context: {
                    slug: node.fields.slug,
                    // find the author imageUrl from the authors and pass it to the single post template
                    imageUrl: authors.find(x => x.name === node.frontmatter.author).imageUrl,
                },
            })
        })
    })
}

 