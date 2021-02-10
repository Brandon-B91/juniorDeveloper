import React from "react"
import {
  Card,
  CardTitle,
  CardBody,
  Form,
  FormGroup,
  Input,
  Badge,
  CardSubtitle,
  CardText,
} from "reactstrap"
import { graphql, StaticQuery, Link } from "gatsby"
import { node } from "prop-types"
import Img from "gatsby-image"

const Sidebar = ({ author, authorFluid }) => (
  <div>
    {author && (
      <Card>
        <Img className="card-image-top" fluid={authorFluid} />
        <CardBody>
          <CardTitle className="text-center text-uppercase mb-3">
            {author.name}
          </CardTitle>
          <CardText>{author.bio}</CardText>
          <div className="author-social-links text-center">
            <ul>
              <li>
                <a
                  href="{author.facebook}"
                  target="_blank"
                  rel="noopener noreffer"
                  className="facebook"
                >
                  <i className="fab fa-facebook-f fa-lg"></i>
                </a>
              </li>
              <li>
                <a
                  href="{author.twitter}"
                  target="_blank"
                  rel="noopener noreffer"
                  className="twitter"
                >
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
              </li>
              <li>
                <a
                  href="{author.instagram}"
                  target="_blank"
                  rel="noopener noreffer"
                  className="instagram"
                >
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
              </li>
              <li>
                <a
                  href="{author.linkedin}"
                  target="_blank"
                  rel="noopener noreffer"
                  className="linkedin"
                >
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
              </li>
            </ul>
          </div>
        </CardBody>
      </Card>
    )}
    <Card>
      <CardBody>
        <CardTitle className="text-center text-upppercase mb-3">
          NewsLetter
        </CardTitle>
        <Form className="text-center">
          <FormGroup>
            <Input
              type="email"
              name="email"
              placeholder="Your email here..."
            ></Input>
          </FormGroup>
          <button className="btn btn-outline-secondary text-uppercase">
            Subscribe
          </button>
        </Form>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase">
          Advertisement
        </CardTitle>
        <img
          src="https://source.unsplash.com/random/320x200"
          alt="advert"
          style={{ width: "100%" }}
        ></img>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          New? Start here!
        </CardTitle>
        <StaticQuery
          query={sidebarQuery}
          render={data => (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Card key={node.id}>
                  <Link to={node.fields.slug}>
                    <Img
                      className="card-image-top"
                      fluid={node.frontmatter.image.childImageSharp.fluid}
                    />
                  </Link>
                  <CardBody>
                    <CardTitle className="text-center">
                      <Link to={node.fields.slug} className="text-danger text-center">
                        {node.frontmatter.title}
                      </Link>
                    </CardTitle>
                    <CardSubtitle>
                      <span className="text-danger">
                        {node.frontmatter.date}
                      </span>{" "}
                      by{" "}
                      <span className="text-danger">
                        {node.frontmatter.author}
                      </span>
                    </CardSubtitle>
                    {node.excerpt}
                  </CardBody>
                </Card>
              ))}
            </div>
          )}
        />
      </CardBody>
    </Card>
  </div>
)

const sidebarQuery = graphql`
  query sidebarQuery {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { eq: "intro" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            author
            date(formatString: "MMM Do YYYY")
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt(format: PLAIN, pruneLength: 80, truncate: true)
        }
      }
    }
  }
`

export default Sidebar
