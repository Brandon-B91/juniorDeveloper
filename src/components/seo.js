
// import React from "react"
// import PropTypes from "prop-types"
// import { Helmet } from "react-helmet"
// import { useLocation } from "@reach/router"
// import { useStaticQuery, graphql } from "gatsby"

// const SEO = ({ title, description, image, article }) => {
//   const { pathname } = useLocation()
//   const { site } = useStaticQuery(query)

//   const {
//     defaultTitle,
//     titleTemplate,
//     defaultDescription,
//     siteUrl,
//     defaultImage,
//     twitterUsername,
//   } = site.siteMetadata

//   const seo = {
//     title: title || defaultTitle,
//     description: description || defaultDescription,
//     image: `${siteUrl}${image || defaultImage}`,
//     url: `${siteUrl}${pathname}`,
//   }

//   return (
//     <Helmet title={seo.title} titleTemplate={titleTemplate}>
//       <meta name="description" content={seo.description} />
//       <meta name="image" content={seo.image} />

//       {seo.url && <meta property="og:url" content={seo.url} />}

//       {(article ? true : null) && <meta property="og:type" content="article" />}

//       {seo.title && <meta property="og:title" content={seo.title} />}

//       {seo.description && (
//         <meta property="og:description" content={seo.description} />
//       )}

//       {seo.image && <meta property="og:image" content={seo.image} />}

//       <meta name="twitter:card" content="summary_large_image" />

//       {twitterUsername && (
//         <meta name="twitter:creator" content={twitterUsername} />
//       )}

//       {seo.title && <meta name="twitter:title" content={seo.title} />}

//       {seo.description && (
//         <meta name="twitter:description" content={seo.description} />
//       )}

//       {seo.image && <meta name="twitter:image" content={seo.image} />}
//     </Helmet>
//   )
// }

// export default SEO

// SEO.propTypes = {
//   title: PropTypes.string,
//   description: PropTypes.string,
//   image: PropTypes.string,
//   article: PropTypes.bool,
// }

// SEO.defaultProps = {
//   title: null,
//   description: null,
//   image: null,
//   article: false,
// }

// const query = graphql`
//   query SEO {
//     site {
//       siteMetadata {
//         defaultTitle: title
//         titleTemplate
//         defaultDescription: description
//         author
//       }
//     }
//   }
// `

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({
  author,
  description,
  lang,
  meta,
  keywords,
  title,
  url,
  pathname,
}) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: 'description',
                content: description,
              },
              {
                property: 'og:title',
                content: title,
              },
              {
                property: 'og:description',
                content: description,
              },
              {
                property: 'og:type',
                content: 'website',
              },
              {
                property: 'og:url',
                content: pathname ? url + pathname : url,
              },
              {
                name: 'twitter:card',
                content: 'summary',
              },
              {
                name: 'twitter:creator',
                content: author,
              },
              {
                name: 'twitter:title',
                content: title,
              },
              {
                name: 'twitter:description',
                content: description,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: 'keywords',
                      content: keywords.join(', '),
                    }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO

export const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

