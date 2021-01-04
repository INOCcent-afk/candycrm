import React from "react"
import style from "./indexFourthShowcase.module.scss"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const getImages = graphql`
  {
    layer1: file(extension: { eq: "png" }, name: { eq: "layer 1" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    layer2: file(extension: { eq: "png" }, name: { eq: "layer 2" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    layer3: file(extension: { eq: "png" }, name: { eq: "layer 3" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const IndexFourthShowcase = () => {
  const data = useStaticQuery(getImages)
  return (
    <div className={style.wrapper}>
      <div className={style.container4}>
        <div className={style.images}>
          <Image
            className={style.layer1}
            fluid={data.layer1.childImageSharp.fluid}
          />
          <Image
            className={style.layer2}
            fluid={data.layer2.childImageSharp.fluid}
          />
          <Image
            className={style.layer3}
            fluid={data.layer3.childImageSharp.fluid}
          />
        </div>
        <div className={style.text}>
          <h1>Take back your time with automation</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            ratione veniam amet similique eaque, mollitia quod dolorum ducimus
            nostrum hic iure praesentium maxime laboriosam nam!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A veniam
            reprehenderit in alias molestias quaerat officiis eius unde.
          </p>
        </div>
      </div>
      <div className={style.wave}>
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAyLjQyOCIgaGVpZ2h0PSI2MjcuMzMxIiB2aWV3Qm94PSIwIDAgMTYwMi40MjggNjI3LjMzMSI+CiAgPGcgaWQ9Ikdyb3VwXzU4MTAiIGRhdGEtbmFtZT0iR3JvdXAgNTgxMCIgb3BhY2l0eT0iMC40NCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBsaWdodGVuO2lzb2xhdGlvbjogaXNvbGF0ZSI+CiAgICA8cGF0aCBpZD0iUGF0aF8yODk2IiBkYXRhLW5hbWU9IlBhdGggMjg5NiIgZD0iTTAsNTE3LjE0M2M5LjcxLTExLjQ1NSw5MC45MTQtMjE1Ljg4MSw0NzUuMjQ0LTIxOC4xMzdzNDYxLjYsMTY1LjU1NCw2NTQuMzg2LDEwOC44MDktNDcuODM2LTE2Ny4wMzEsMC0yNjguOTg1UzEzMjAuOTY3LDAsMTMyMC45NjcsMFY1MTcuMTQzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjgxLjQ2MSAxMTAuMTg4KSIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iMC4yNSIvPgogICAgPHBhdGggaWQ9IlBhdGhfMjg5NyIgZGF0YS1uYW1lPSJQYXRoIDI4OTciIGQ9Ik0wLDQ3MC4yOWM4LjgzMi0xMC40MTcsMzQuOS0xNzMuODEzLDM4NC40MDgtMTc1Ljg2NnM0NjcuNTYxLDE0My4xMTksNjQyLjg3NSw5MS41MTQtNi4zMTItMTg3Ljk2NiwzNy4xOTEtMjgwLjY4MlMxMjAxLjI4NiwwLDEyMDEuMjg2LDBWNDcwLjI5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAxLjE0MSAxNTcuMDQxKSIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iMC4yNSIvPgogICAgPHBhdGggaWQ9IlBhdGhfMjg5OCIgZGF0YS1uYW1lPSJQYXRoIDI4OTgiIGQ9Ik0wLDYyNy4zMzFjMTEuNzgtMTMuODk1LDIyMC44MTUtMzA2Ljc0NSw2ODcuMDI4LTMwOS40ODJzNDY1LjcsMjM5LjQ0MSw2OTkuNTYxLDE3MC42LTEyMS43MzQtMTQyLjM4Ny02My43MDctMjY2LjA2NFMxNjAyLjQyNywwLDE2MDIuNDI3LDBWNjI3LjMzMVoiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMjUiLz4KICA8L2c+Cjwvc3ZnPgo="
          alt=""
        />
      </div>
    </div>
  )
}

export default IndexFourthShowcase
