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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            saepe quisquam, tempora assumenda deserunt exercitationem doloremque
            quo velit, quos dicta ab. Optio, dolorum ratione velit dolor cum sit
            incidunt corporis!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus aperiam dolorum quas vitae nemo adipisci quae suscipit
            quibusdam quos ab necessitatibus quisquam, veritatis et? Vel ipsam
            vero sapiente voluptates commodi.
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
