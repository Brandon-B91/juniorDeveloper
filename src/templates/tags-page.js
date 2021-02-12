
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Badge, Button } from 'reactstrap'
import { slugify } from '../util/utilityFunctions'

const tagsPage = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext
  return (
    <Layout pageTitle="All tags">
      <SEO title="All tags" keywords={['tags', 'topics']} />
      <ul className="tags-ul d-flex justify-content-center flex-wrap text-center">
        {tags.map(tag => (
          <li key={tag} style={{ marginRight: '10px', marginBottom: '10px' }}>
            <Button color="secondary" href={`/tag/${slugify(tag)}`}>
              {tag} <Badge color="light">{tagPostCounts[tag]}</Badge>
            </Button>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default tagsPage