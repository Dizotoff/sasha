/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              paddingTop: "32px",
              paddingBottom: "0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                flexGrow: "1",
                display: "flex",
                justifyContent: "center",
                width: "100%",
                paddingBottom: "24px",
              }}
            >
              <Img
                style={{ maxWidth: "300px", flexGrow: "1" }}
                fluid={data.avatar.childImageSharp.fluid}
                alt={author}
              />
            </div>
            <div
              style={{
                maxWidth: "600px",
                flexGrow: "1",
                textAlign: "center",
              }}
            >
              <p>
                Olen Aleksandra Savelieva, valokuvaaja Helsingistä. Yritän saada
                kuvattua oikeita tunteita. Aidot tunteet ovat kaunein elämän
                ilmiö. Juuri se ajaa minut tekemään työtäni kovalla rakkaudella.
              </p>
              <p>
                Aloitin valokuvata noin kolme vuotta sitten ja se alkoi siitä,
                että halusin näyttää kaverilleni, että hän on kauniimpi kuin hän
                luulee. Ja niin se jatkui. Aloin kuvata muita ihmisiä ja
                myöhemmin aloin ottamaan vastaan valokuvaustilauksia. Ja nyt
                olen kuvaamassa monia eri asioita.
              </p>
              <p>
                Jos teillä on kysymyksiä, ehdotuksia tai haluatte varata
                kuvauksen, täyttäkää alla oleva lomake:
              </p>
            </div>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/11.png/" }) {
      childImageSharp {
        fluid(maxWidth: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
