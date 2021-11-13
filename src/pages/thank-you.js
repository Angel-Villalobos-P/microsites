import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import ImageAndInformationSquare from "../modules/ImageAndInformationSquare"

const ThankYou = () => {
  const [content, setContent] = useState(null)

  useEffect(() => {
    fetch("/.netlify/functions/thankyouContent")
      .then(res => res.json())
      .then(data => setContent(data.response))
  }, [])

  return (
    <Layout>
      {content && <ImageAndInformationSquare item={content?.zones?.MainContentZone[0]} />}
    </Layout>
  )
}

export default ThankYou
