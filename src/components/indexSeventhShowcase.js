import React from "react"
import style from "../components/indexSeventhShowcase.module.scss"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const getImages = graphql`
  {
    logos1: file(extension: { eq: "png" }, name: { eq: "logos1" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    logos2: file(extension: { eq: "png" }, name: { eq: "logos2" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    logos3: file(extension: { eq: "png" }, name: { eq: "logos3" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    logos4: file(extension: { eq: "png" }, name: { eq: "logos4" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    logos5: file(extension: { eq: "png" }, name: { eq: "logos5" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    logos6: file(extension: { eq: "png" }, name: { eq: "logos6" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    logos7: file(extension: { eq: "png" }, name: { eq: "logos7" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    logos8: file(extension: { eq: "png" }, name: { eq: "logos8" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    logos9: file(extension: { eq: "png" }, name: { eq: "logos9" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    logos10: file(extension: { eq: "png" }, name: { eq: "logos10" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const IndexSeventhShowcase = () => {
  const data = useStaticQuery(getImages)
  return (
    <div className={style.container7}>
      <div className={style.firstCircle}></div>
      <div className={style.secondCircle}></div>
      <div className={style.content}>
        <div className={style.contentTitle}>
          <h1>Simplify marketing relationships through platform Lorem</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            obcaecati quisquam nam dolor sint soluta distinctio optio suscipit
            iure beatae?
          </p>
          <p>Don't believe us? These companies do.</p>
        </div>
        <div className={style.logosContainer}>
          <Image fixed={data.logos1.childImageSharp.fixed} />
          <Image fixed={data.logos2.childImageSharp.fixed} />
          <Image fixed={data.logos3.childImageSharp.fixed} />
          <Image fixed={data.logos4.childImageSharp.fixed} />
          <Image fixed={data.logos5.childImageSharp.fixed} />
          <Image fixed={data.logos6.childImageSharp.fixed} />
          <Image fixed={data.logos7.childImageSharp.fixed} />
          <Image fixed={data.logos8.childImageSharp.fixed} />
          <Image fixed={data.logos9.childImageSharp.fixed} />
          <Image fixed={data.logos10.childImageSharp.fixed} />
        </div>
      </div>
    </div>
  )
}

export default IndexSeventhShowcase
