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
          alt="Brandons profile picture"
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
    <Card>
      <CardTitle className="text-center mt-3 text-uppercase">Interested in joining the team?</CardTitle>
        <CardBody>
          If you're interested in joining the team or would like to contribute to the writing 
          here we would love for you to reach out so we can talk about it more. This page is dedicated to 
          more than just "Web" we would love to diversiy what we cover as far as many fields as possible.
          Do you work with python? Great! what about Java or Ruby? do you do more like Wordpress development? 
          Well we want you to write for us. 
        </CardBody>
      </Card>
  </Layout>
)

export default TeamPage
