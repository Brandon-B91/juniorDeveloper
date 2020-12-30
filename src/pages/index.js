import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticQuery, graphql } from 'gatsby'
import Post from "../components/Post"
import { Row, Col } from 'reactstrap'
import Sidebar from '../components/Sidebar'

const IndexPage = () => (
  <Layout>
    <h1>Home page</h1>
    <Row>
      <Col md='8'>
      <StaticQuery 
        query={indexQuery} 
        render={data => {
          return (
            <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post 
                title={node.frontmatter.title}
                author={node.frontmatter.author}
                path={node.frontmatter.path}
                date={node.frontmatter.date}
                body={node.excerpt}
                fluid={node.frontmatter.image.childImageSharp.fluid}
                tags={node.frontmatter.tags}
          />
        ))}
        
      </div>
      )
    }}/>
      </Col>
      <Col md='4'>
        <Sidebar></Sidebar>
      </Col>
    </Row>
  </Layout>
)

const indexQuery = graphql`
query{
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
    edges{
      node{
        id
        frontmatter {
          title
          date(formatString: "MMM Do YYYY")
          author
          path
          tags
          image{
            childImageSharp{
              fluid(maxWidth: 600){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt 
      }
    }
  }
}
`

export default IndexPage
