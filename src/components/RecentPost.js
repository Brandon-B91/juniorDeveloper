import React from "react"
import Layout from "../components/layout"
import { StaticQuery, graphql } from "gatsby"
import Post from "../components/Post"
import SEO from "../components/seo"

const RecentPosts = () => {

  return (
    <Layout pageTitle="Check out our latest posts">
      <SEO title="junior developers blog" description="Web and frontend development blog, let's talk all things techno wizardry and mechanical witchcraft"></SEO>
      <StaticQuery
        query={RecentQuery} 
        render={data => {
          return (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Post
                  key={node.id}
                  title={node.frontmatter.title}
                  author={node.frontmatter.author}
                  slug={node.fields.slug}
                  date={node.frontmatter.date}
                  body={node.excerpt}
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                  tags={node.frontmatter.tags}
                />
              ))}
            </div>
          )
        }}
      />
    </Layout>
  )
}

const RecentQuery = graphql`
  query RecentQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            author
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt(format: PLAIN, pruneLength: 180, truncate: true)
        }
      }
    }
  }
`

export default RecentPosts