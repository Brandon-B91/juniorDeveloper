import React from "react"
import Layout from "../components/layout"
import { StaticQuery, graphql } from "gatsby"
import Post from "../components/Post"
import PaginationLinks from "../components/PaginationLinks"
import SEO from "../components/seo"

const IndexPage = () => {
  const postsPerPage = 5
  let numberOfPages

  return (
    <Layout pageTitle=" < jrDevsBlog />">
      <SEO title="junior developers blog" description="Junior developer blog" keywords={[`gatsby`, `react`, `javascript`, `html`, `css`, `front end`, `sass`, `application`, `pwa`, `progressive web app`, `junior developer`, `junior dev`]}></SEO>
      <StaticQuery
        query={indexQuery} 
        render={data => {
          numberOfPages = Math.ceil(
            data.allMarkdownRemark.totalCount / postsPerPage
          )
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
              <PaginationLinks currentPage={1} numberOfPages={numberOfPages} />
            </div>
          )
        }}
      />
    </Layout>
  )
}

const indexQuery = graphql`
  query indexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
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

export default IndexPage
