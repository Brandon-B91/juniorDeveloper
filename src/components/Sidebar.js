import React from 'react'
import { Card, CardTitle, CardBody, Form, FormGroup, Input, Badge, CardSubtitle } from 'reactstrap'
import {graphql, StaticQuery, Link} from 'gatsby'
import { node } from 'prop-types'
import Img from 'gatsby-image'
import slugify from '../util/utilityFunctions'

const Sidebar = () => (
    <div> 
        <Card>
            <CardBody>
                <CardTitle className="text-center text-upppercase mb-3">
                    NewsLetter.
                </CardTitle>
                <Form className="text-center">
                    <FormGroup>
                        <Input type="email" name="email" placeholder="Your email here...">
                    </Input>
                    </FormGroup>
                    <button className="btn btn-outline-secondary text-uppercase">Subscribe</button>
                </Form>
            </CardBody>
        </Card>
        <Card>
            <CardBody>
                <CardTitle className="text-center text-uppercase">
                    Advertisement.
                </CardTitle>
                <img src="https://via.placeholder.com/320x320" alt="advert" style={{width: "100%"}}></img>
            </CardBody>
        </Card>
        <Card>
            <CardBody>
                <CardTitle className="text-center text-uppercase mb-3">
                    New? Start here!
                </CardTitle>
                <StaticQuery query={sidebarQuery} render={(data) => (
                    <div>
                    {data.allMarkdownRemark.edges.map(({node}) => (
                        <Card key={node.id}>
                            <Link to={node.fields.slug}>
                            <Img className="card-image-top" fluid={node.frontmatter.image.childImageSharp.fluid}></Img>
                            </Link>
                            <CardBody>
                                <CardTitle>
                                    <Link to={node.fields.slug}>
                                        {node.frontmatter.title}
                                    </Link>
                                </CardTitle>
                                <CardSubtitle>
                                    <span className="text-danger">{node.frontmatter.date}</span> by{' '}
                                    <span className="text-danger">{node.frontmatter.author}</span>
                                </CardSubtitle>
                                {node.excerpt}
                            </CardBody>
                        </Card>
                    ))}
                    </div>
                )}></StaticQuery>
            </CardBody>
        </Card>
    </div>
)

const sidebarQuery = graphql `
    query sidebarQuery {
        allMarkdownRemark(
            filter: {
                frontmatter: { tags: { eq: "intro" }}
            }
            sort: { fields: [frontmatter___date], order: DESC}
            limit: 3

        ) {
            edges {
                node{
                    id
                    frontmatter{
                        title
                        author
                        date(formatString: "MMM Do YYYY")
                        tags 
                        image{
                            childImageSharp{
                                fluid(maxWidth: 300){
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

export default Sidebar