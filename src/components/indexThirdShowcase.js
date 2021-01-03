import React from "react"
import style from "./indexThirdShowcase.module.scss"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const getImages = graphql`
  {
    phoneframe: file(extension: { eq: "png" }, name: { eq: "phone-frame" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    phoneframecontent1: file(
      extension: { eq: "png" }
      name: { eq: "phone-frame-content-1" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    phoneframecontent2: file(
      extension: { eq: "png" }
      name: { eq: "phone-frame-content-2" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    phoneframecirclelg: file(
      extension: { eq: "png" }
      name: { eq: "phone-frame-circle-large" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    phoneframecirclesm: file(
      extension: { eq: "png" }
      name: { eq: "phone-frame-circle-small" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const IndexThirdShowcase = () => {
  const data = useStaticQuery(getImages)
  return (
    <div className={style.wrapper3}>
      <div className={style.container3}>
        <div className={style.content}>
          <h1>The visibility to solve your biggest problems</h1>
          <p>
            If you’re an IT service provider, you know what your problem is…
            it’s sales and marketing. If you want to fix that problem you need
            to approach it like any other problem: Identify the source.
          </p>
          <p>
            That’s why Honey’s entire foundation is built on visibility. You can
            finally have complete visibility over your sales and marketing team,
            making the source of the problem clear.
          </p>
        </div>
        <div className={style.container3Image}>
          <div className={style.phoneFrame}>
            <Image fluid={data.phoneframe.childImageSharp.fluid} />
          </div>
          <div className={style.phoneFrameContent2}>
            <Image fluid={data.phoneframecontent2.childImageSharp.fluid} />
          </div>
          <div className={style.phoneFrameContent1}>
            <Image fluid={data.phoneframecontent1.childImageSharp.fluid} />
          </div>
          <div className={style.phoneFrameCirclelg}>
            <Image fluid={data.phoneframecirclelg.childImageSharp.fluid} />
          </div>
          <div className={style.phoneFrameCirclesm}>
            <Image fluid={data.phoneframecirclesm.childImageSharp.fluid} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexThirdShowcase
