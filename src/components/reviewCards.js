import React from "react"
import style from "./reviewCards.module.scss"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const getStar = graphql`
  {
    star: file(extension: { eq: "png" }, name: { eq: "star" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    review: file(extension: { eq: "jpg" }, name: { eq: "reviews-1" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const ReviewCards = props => {
  const data = useStaticQuery(getStar)
  return (
    <div className={style.card}>
      <div className={style.imgContainer}>
        <Image fluid={props.img} />
      </div>
      <div className={style.cardContent}>
        <h1>{props.title}</h1>
        <span>{props.span}</span>
        <p>{props.p}</p>
        <Image className={style.star} fluid={data.star.childImageSharp.fluid} />
      </div>
    </div>
  )
}

export default ReviewCards
