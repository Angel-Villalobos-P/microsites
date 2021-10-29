import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import ClientsAndPartners from "../modules/ClientsAndPartners"
import ContentAndImage from "../modules/ContentAndImage"
import CTAFooter from "../modules/CTAFooter"
import GridListing from "../modules/GridListing"
import Hero from "../modules/Hero"
import TwoColumnsLeftListAndImage from "../modules/TwoColumnsLeftListAndImage"

const Home = (props) => {
  const [content, setContent] = useState({})

  useEffect(() => {
    fetch("/.netlify/functions/content")
      .then(res => res.json())
      .then(data => setContent(data.response))
  }, [])

  return (
    <Layout>
      {content && <Hero item={content?.zones?.MainContentZone[0]} />}
      {content && <ContentAndImage item={content?.zones?.MainContentZone[1]} />}
      {content && <TwoColumnsLeftListAndImage item={content?.zones?.MainContentZone[2]} />}
      {content && <TwoColumnsLeftListAndImage item={content?.zones?.MainContentZone[3]} />}
      {content && <ContentAndImage item={content?.zones?.MainContentZone[4]} />}
      {content && <GridListing item={content?.zones?.MainContentZone[5]} />}
      {content && <ContentAndImage item={content?.zones?.MainContentZone[6]} />}
      {content && <ClientsAndPartners item={content?.zones?.MainContentZone[7]} />}
      {content && <ContentAndImage item={content?.zones?.MainContentZone[8]} />}
      {content && <CTAFooter item={content?.zones?.MainContentZone[9]} />}
    </Layout>
  )
}

export default Home
