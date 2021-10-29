import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import ContentAndImage from "../modules/ContentAndImage"
import CTAFooter from "../modules/CTAFooter"
import GridListing from "../modules/GridListing"
import Hero from "../modules/Hero"
import MicrositeNavbar from "../modules/MicrositeNavbar"
import TableBlock from "../modules/TableBlock"
import TestimonyBlock from "../modules/TestimonyBlock"
import TwoColumnsContentAndList from "../modules/TwoColumnsContentAndList"
import TwoColumnsLeftListAndImage from "../modules/TwoColumnsLeftListAndImage"

const SEOServicesPlans = () => {
  const [content, setContent] = useState(null)

  useEffect(() => {
    fetch("/.netlify/functions/seoServicesContent")
      .then(res => res.json())
      .then(data => setContent(data.response))
  }, [])

  return (
    <Layout>
      {content && <Hero item={content?.zones?.MainContentZone[0]} />}
      {content && <MicrositeNavbar item={content?.zones?.MainContentZone[1]} />}
      {content && <ContentAndImage item={content?.zones?.MainContentZone[2]} />}
      {content && (<TwoColumnsContentAndList item={content?.zones?.MainContentZone[3]} />)}
      {content && <TableBlock item={content?.zones?.MainContentZone[4]} />}
      {content && <GridListing item={content?.zones?.MainContentZone[5]} />}
      {content && <TwoColumnsContentAndList item={content?.zones?.MainContentZone[6]} />}
      {content && <TwoColumnsLeftListAndImage item={content?.zones?.MainContentZone[7]} />}
      {content && <GridListing item={content?.zones?.MainContentZone[8]} />}
      {content && <TestimonyBlock item={content?.zones?.MainContentZone[9]} />}
      {content && <ContentAndImage item={content?.zones?.MainContentZone[10]} />}
      {content && <CTAFooter item={content?.zones?.MainContentZone[11]} />}
    </Layout>
  )
}
export default SEOServicesPlans
