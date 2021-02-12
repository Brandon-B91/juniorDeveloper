import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticQuery, graphql } from 'gatsby'
import Post from "../components/Post"
import PaginationLinks  from '../components/PaginationLinks'
import AddToHomeScreen from 'gatsby-plugin-pwainstall'



const IndexPage = () => {
  const postsPerPage = 5;
  let numberOfPages 

  return(
  <Layout>
    <h1 className="text-center">{'< jrDevsBlog /> '}</h1>
      <StaticQuery 
        query={indexQuery} 
        render={data => {
          numberOfPages = Math.ceil(data.allMarkdownRemark.totalCount / postsPerPage)
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
query {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}
    limit: 5
    ) {
    totalCount
    edges{
      node{
        id
        frontmatter {
          title
          date(formatString: "MMM Do YYYY")
          author
          tags
          image{
            childImageSharp{
              fluid(maxWidth: 600){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields{
          slug
        }
        excerpt 
      }
    }
  }
}
`

export default IndexPage
