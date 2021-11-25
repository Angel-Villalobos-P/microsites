import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import ClientsAndPartners from "../modules/ClientsAndPartners"
import ContentAndImage from "../modules/ContentAndImage"
import CTAFooter from "../modules/CTAFooter"
import GridListing from "../modules/GridListing"
import Hero from "../modules/Hero"
import TwoColumnsLeftListAndImage from "../modules/TwoColumnsLeftListAndImage"

const IndexPage = ({ serverData }) => {
  // const [content, setContent] = useState({})

  // useEffect(() => {
  //   fetch("/.netlify/functions/content")
  //     .then(res => res.json())
  //     .then(data => setContent(data.response))
  // }, [])
  const {
    zones: { MainContentZone },
  } = serverData

  return (
    <Layout>
      {/* {content && <Hero item={content?.zones?.MainContentZone[0]} />}
      {content && <ContentAndImage item={content?.zones?.MainContentZone[1]} />}
      {content && <TwoColumnsLeftListAndImage item={content?.zones?.MainContentZone[2]} />}
      {content && <TwoColumnsLeftListAndImage item={content?.zones?.MainContentZone[3]} />}
      {content && <ContentAndImage item={content?.zones?.MainContentZone[4]} />}
      {content && <GridListing item={content?.zones?.MainContentZone[5]} />}
      {content && <ContentAndImage item={content?.zones?.MainContentZone[6]} />}
      {content && <ClientsAndPartners item={content?.zones?.MainContentZone[7]} />}
      {content && <ContentAndImage item={content?.zones?.MainContentZone[8]} />}
      {content && <CTAFooter item={content?.zones?.MainContentZone[9]} />} */}
      {MainContentZone && <Hero item={MainContentZone[0]} />}
      {MainContentZone && <ContentAndImage item={MainContentZone[1]} />}
      {MainContentZone && (
        <TwoColumnsLeftListAndImage item={MainContentZone[2]} />
      )}
      {MainContentZone && (
        <TwoColumnsLeftListAndImage item={MainContentZone[3]} />
      )}
      {MainContentZone && <GridListing item={MainContentZone[4]} />}
      {MainContentZone && <ContentAndImage item={MainContentZone[5]} />}
      {MainContentZone && <ClientsAndPartners item={MainContentZone[6]} />}
      {MainContentZone && <ContentAndImage item={MainContentZone[7]} />}
      {MainContentZone && <CTAFooter item={MainContentZone[8]} />}
    </Layout>
  )
}

export async function getServerData() {
  const rest = await fetch(
    "https://api.aglty.io/800c8044/fetch/en-us/page/111",
    {
      headers: {
        APIKEY:
          "defaultlive.42fb0e27ae9606d57c06565f2369f5de856c3982facea37d12308ff2d453851f",
      },
    }
  )
  return {
    props: await rest.json(),
  }
}

export default IndexPage
