import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import authors from "../util/author"
import { Button, Card, CardText, CardBody, CardTitle, Row } from "reactstrap"
import BrandonImage from "../images/Brandon.jpeg"
import { slugify } from "../util/utilityFunctions"

const TeamPage = () => (
  <Layout pageTitle="Our Team">
    <SEO title="Our Team" keywords={[`gatsby`, `application`, `react`]} />
    <Row className="mb-4">
      <div className="col-md-3">
        <img
          src={BrandonImage}
          style={{ maxWidth: "100%" }}
          alt="John profile"
        />
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: "100%" }}>
          <CardBody>
            <CardTitle>{authors[0].name}</CardTitle>
            <CardText>{authors[0].bio}</CardText>
            <Button
              classname="text-uppercase"
              color="outline-secondary"
              href={`/author/${slugify(authors[0].name)}`}
            >
              View posts
            </Button>
          </CardBody>
        </Card>
      </div>
    </Row>
  </Layout>
)

export default TeamPage
