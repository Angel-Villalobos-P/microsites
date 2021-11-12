import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import CTAFooter from "../modules/CTAFooter"
import Hero from "../modules/Hero"
import MicrositeNavbar from "../modules/MicrositeNavbar"
import TableBlock from "../modules/TableBlock"

const EnterpriseSocialMediaAds = () => {
  const [content, setContent] = useState(null)

  useEffect(() => {
    fetch("/.netlify/functions/enterpriseSocialMediaContent")
      .then(res => res.json())
      .then(data => setContent(data.response))
  }, [])

  return (
    <Layout>
      <p>text</p>
      {/* {content && <Hero item={content?.zones?.MainContentZone[0]} />}
      {content && <MicrositeNavbar item={content?.zones?.MainContentZone[1]} />}
      {content && <TwoColumnsAndBlackbox item={content?.zones?.MainContentZone[2]} />}
      {content && <TwoColumnsLeftContent item={content?.zones?.MainContentZone[3]} />}
      {content && <TableBlock item={content?.zones?.MainContentZone[4]} />}
      {content && <CTAFooter item={content?.zones?.MainContentZone[5]} />} */}
    </Layout>
  )
}

export default EnterpriseSocialMediaAds
