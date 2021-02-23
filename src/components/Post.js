import React from "react"
import { Link } from "gatsby"
import {
  Badge,
  Card,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
} from "reactstrap"
import Img from "gatsby-image"
import { slugify } from "../util/utilityFunctions"

const Post = ({ title, author, slug, date, body, fluid, tags }) => {
  return (
    <Card>
      <Link to={`/${slug}/`}>
        <Img className="card-image-top" fluid={fluid} />
      </Link>
      <CardBody>
        <CardTitle>
          <Link
            to={`/${slug}/`}
            className="text-danger d-flex justify-content-center h3"
          >
            {title}
          </Link>
        </CardTitle>
        <CardSubtitle>
          <span className="text-danger">{date}</span> by{" "}
          <span className="text-danger">{author}</span>
        </CardSubtitle>
        <CardText>{body}</CardText>
        <ul className="post-tags d-flex flex-wrap">
          {tags.map(tag => (
            <li key={tag}>
              <Link to={`/tag/${slugify(tag)}`}>
                <Badge color="secondary" className="text-uppercase">
                  {tag}
                </Badge>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to={`/${slug}/`}
          className="btn btn-outline-secondary float-right"
        >
          Read more...
        </Link>
      </CardBody>
    </Card>
  )
}

export default Post
