import React from "react"
import ReviewCards from "./reviewCards.js"
import style from "./reviewSecondShowcase.module.scss"
import { useStaticQuery, graphql } from "gatsby"

const getImages = graphql`
  {
    review1: file(extension: { eq: "jpg" }, name: { eq: "reviews-1" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    review2: file(extension: { eq: "jpg" }, name: { eq: "reviews-2" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    review3: file(extension: { eq: "jpg" }, name: { eq: "reviews-3" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    review4: file(extension: { eq: "jpg" }, name: { eq: "reviews-4" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const ReviewSecondShowcase = () => {
  const data = useStaticQuery(getImages)
  return (
    <div className={style.container}>
      <ReviewCards
        img={data.review1.childImageSharp.fluid}
        title="Red River Intel Partners"
        span="Joseph Hena"
        p="It gives you a ton of information that I didn't even know you could get."
      />
      <ReviewCards
        img={data.review2.childImageSharp.fluid}
        title="Dynamic Technology Group"
        span="Garnett Harryman"
        p="It is the easiest and easiest to look at platform by any means out of any of the other CRMs out there on the market"
      />
      <ReviewCards
        img={data.review3.childImageSharp.fluid}
        title="Cringelink"
        span="Taj Goel"
        p="I love that my marketing information isn't siloed into yet another vendor portal."
      />
      <ReviewCards
        img={data.review4.childImageSharp.fluid}
        title="Intel Business Hero"
        span="Raul Olivares"
        p="It was a breath of fresh air that we had a CRM system that could not only do automated market research, but also integrate with all the platforms that we use on a daily basis."
      />
    </div>
  )
}

export default ReviewSecondShowcase
