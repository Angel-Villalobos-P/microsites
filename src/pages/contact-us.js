import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import FormSection from "../modules/FormSection"
import Hero from "../modules/Hero"
import Locations from "../modules/Locations"

const EnterpriseSocialMediaAds = () => {
  const [content, setContent] = useState(null)

  useEffect(() => {
    fetch("/.netlify/functions/contactUsContent")
      .then(res => res.json())
      .then(data => setContent(data.response))
  }, [])

  return (
    <Layout>
      {content && <Hero item={content?.zones?.MainContentZone[0]} />}
      {content && <FormSection item={content?.zones?.MainContentZone[1]} />}
      {content && <Locations item={content?.zones?.MainContentZone[2]} />}
    </Layout>
  )
}

export default EnterpriseSocialMediaAds
