import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticQuery, graphql } from 'gatsby'
import Post from "../components/Post"
import ModalExample from "../components/ModalBtn"
import { Row, Col } from 'reactstrap'




const IndexPage = () => (
  <Layout>
    <h1>Home page.</h1>
    {/* <div>
    <p className="modal-p">Viewing this on your phone? for a more app like experience. <ModalExample></ModalExample></p>
    </div> */}
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
                body={node.frontmatter.excerpt}
                fluid={node.frontmatter.image.childImageSharp.fluid}
          />
        ))}
        
      </div>
      )
    }}/>
      </Col>
      <Col md='4'>
        <div className="div"> 

        </div>
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
        frontmatter{
          title
          date(formatString: "MMM Do YYYY")
          author
          path
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
