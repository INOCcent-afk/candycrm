import React from "react"
import Layout from "../components/layout"
import ReviewsFirstShowcase from "../components/reviewsFIrstShowcase"
import ReviewSecondShowcase from "../components/reviewSecondShowcase.js"

const ReviewsPage = () => {
  return (
    <Layout>
      <ReviewsFirstShowcase />
      <ReviewSecondShowcase />
    </Layout>
  )
}

export default ReviewsPage
