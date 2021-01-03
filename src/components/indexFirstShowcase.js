import React from "react"
import style from "./indexFirstShowcase.module.scss"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const getImage = graphql`
  {
    fluid: file(extension: { eq: "png" }, name: { eq: "homepage-mobile" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const IndexFirstShowcase = () => {
  const data = useStaticQuery(getImage)
  return (
    <div className={style.container1}>
      <img
        className={style.waveBg}
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI2NSIgaGVpZ2h0PSI5NzAiIHZpZXdCb3g9IjAgMCAxMjY1IDk3MCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgiPjxyZWN0IGlkPSJSZWN0YW5nbGVfMzE0NiIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMzE0NiIgd2lkdGg9IjEyNjUiIGhlaWdodD0iOTcwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MSA3MCkiIGZpbGw9IiNmZmYiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9jbGlwUGF0aD48L2RlZnM+PGcgaWQ9Ik1hc2tfR3JvdXBfOTYiIGRhdGEtbmFtZT0iTWFzayBHcm91cCA5NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQxIC03MCkiIGNsaXAtcGF0aD0idXJsKCNjbGlwLXBhdGgpIj48cGF0aCBpZD0iTG9nSW5fQkdfc3ZnIiBkPSJNLTI5MC4yMTQsODk3LjcxMXM1NTguNzcxLDc5Ny41NCw3NDUuNTQsNTYwLjA1Nyw4NC4zMTQtNDkwLjEsMTE4LjgtODQwLjI0NGMxMy41MTgtMTM3LjI1NCw0OS4wMTQtMjYwLjI2Nyw4Ny4yODQtMzU5LjM4TDM1OC40NjMsMEMyMjguOSw0MjUuMjM5LTI5MC4yMTQsODk3LjcxMS0yOTAuMjE0LDg5Ny43MTFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDU5LjIwMSAtMjUwLjQpIHJvdGF0ZSg1MSkiIGZpbGw9IiNmZmZmZmYiLz48L2c+PC9zdmc+"
        alt="wave-svg"
      />
      <div className={style.content}>
        <h1>Say Hello to Honey</h1>
        <p>A super sweet sales & marketing app for IT service providers</p>
        <div className={style.buttons}>
          <button>
            <a href="#">Try Honey for Free</a>
          </button>
          <button className={style.secondButton}>
            <a href="#">Watch Demo</a>
          </button>
        </div>
        <Image
          className={style.mobileImage}
          fluid={data.fluid.childImageSharp.fluid}
          alt="mobile-image"
        />
      </div>
    </div>
  )
}

export default IndexFirstShowcase
