import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import CTAFooter from "../modules/CTAFooter"
import Hero from "../modules/Hero"
import MicrositeNavbar from "../modules/MicrositeNavbar"
import TableBlock from "../modules/TableBlock"
import TwoColumnsAndBlackbox from "../modules/TwoColumnsAndBlackbox"
import TwoColumnsLeftContent from "../modules/TwoColumnsLeftContent"

const EcommerceSEO = () => {
  const [content, setContent] = useState(null)

  useEffect(() => {
    fetch("/.netlify/functions/ecommerceSeoContent")
      .then(res => res.json())
      .then(data => setContent(data.response))
  }, [])

  return (
    <Layout>
      {content && <Hero item={content?.zones?.MainContentZone[0]} />}
      {content && <MicrositeNavbar item={content?.zones?.MainContentZone[1]} />}
      {content && <TwoColumnsAndBlackbox item={content?.zones?.MainContentZone[2]} />}
      {content && <TwoColumnsLeftContent item={content?.zones?.MainContentZone[3]} />}
      {content && <CTAFooter item={content?.zones?.MainContentZone[4]} />}
    </Layout>
  )
}

export default EcommerceSEO
