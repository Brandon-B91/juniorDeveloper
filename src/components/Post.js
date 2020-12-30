import React from 'react'
import { Link } from 'gatsby'
import { Badge, Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap'
import Img from 'gatsby-image'
import { slugify } from '../util/utilityFunctions'
const Post = ({ title, author, path, date, body, fluid, tags }) => {
    return(
        <Card>
            <Link to={path}>
            <Img className="card-image-top" fluid={fluid} />
            </Link>
            <CardBody>
                <CardTitle><Link to={path} className="text-danger d-flex justify-content-center h3">{title}</Link></CardTitle>
                <CardSubtitle>
                    <span className="text-danger">{date}</span> by{' '}
                    <span className="text-danger">{author}</span>
                </CardSubtitle>
                <CardText>{body}</CardText>
                <ul className='post-tags'>
                  {tags.map(tag => (
                      <li>
                          <Link to={`/tag/${slugify(tag)}`}>
                              <Badge color="secondary" className="text-uppercase">{tag}</Badge>
                          </Link>
                      </li>
                  ))}  
                </ul>
                <Link to={path} className="btn btn-outline-secondary float-right">Read more...</Link>
            </CardBody>
        </Card>
    )
}

export default Post