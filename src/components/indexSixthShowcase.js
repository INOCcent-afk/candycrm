import React from "react"
import style from "./indexSixthShowcase.module.scss"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const getImages = graphql`
  {
    fullImage: file(extension: { eq: "png" }, name: { eq: "container6-11" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    layer1: file(extension: { eq: "png" }, name: { eq: "container6-1" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const IndexSixthShowcase = () => {
  const data = useStaticQuery(getImages)
  return (
    <div className={style.wrapper}>
      <div className={style.container6}>
        <div className={style.image}>
          <Image fluid={data.fullImage.childImageSharp.fluid} />
        </div>
        <div className={style.content}>
          <h1>Lose the migration anxiety</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam a
            dolorem id laboriosam maiores! Incidunt nemo quis obcaecati
            similique quisquam!
          </p>
          <p>Keep them all or replace what you want when you want.</p>
        </div>
      </div>
    </div>
  )
}

export default IndexSixthShowcase
