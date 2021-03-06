import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"
import PostCard from "../components/postCard"
import Banner from "../components/banner"
// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"
import Form from "../components/form"

//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Portfolio"
        keywords={[
          `Photographer`,
          `Sasha`,
          `Savelievvaa`,
          `Helsinki`,
          `Portfolio`,
          `Valokuvaaja`,
          `Valokuvaus`,
          `Henkilökuva`,
          `Portretti`,
          `Ruokakuvaus`,
          `Muotokuvaus`,
        ]}
      />
      <Banner></Banner>
      <div className="post-feed">
        {posts.map(({ node }) => {
          postCounter++
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          )
        })}
      </div>
      <Bio />
      <Form />
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default (props) => (
  <StaticQuery
    query={indexQuery}
    render={(data) => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
