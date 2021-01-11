import React from "react"
import Link from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout pageTitle="oops, something went wrong.">
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link className="btn btn-secondary" to ={'/'}>Go Home</Link>
  </Layout>
)

export default NotFoundPage
