import React from "react"
import style from "./reviewsFirstShowcase.module.scss"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const getImages = graphql`
  {
    leftQuote: file(extension: { eq: "png" }, name: { eq: "quote-left" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    rightQuote: file(extension: { eq: "png" }, name: { eq: "quote-right" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const ReviewsFirstShowcase = () => {
  const data = useStaticQuery(getImages)
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <h1>Testimonials From Satisfied Honey Users</h1>
        <p>See what Honey has done for countless MSPs like yours</p>
        <Image
          className={style.leftQuote}
          fixed={data.leftQuote.childImageSharp.fixed}
        />
        <Image
          className={style.rightQuote}
          fixed={data.rightQuote.childImageSharp.fixed}
        />
      </div>
    </div>
  )
}

export default ReviewsFirstShowcase
