import React from "react"
import Layout from "../components/layout"
import ClientsAndPartners from "../modules/ClientsAndPartners"
import ContentAndImage from "../modules/ContentAndImage"
import CTAFooter from "../modules/CTAFooter"
import GridListing from "../modules/GridListing"
import Hero from "../modules/Hero"
import TwoColumnsLeftListAndImage from "../modules/TwoColumnsLeftListAndImage"

const IndexPage = ({ serverData }) => {
  const {
    zones: { MainContentZone },
  } = serverData

  return (
    <Layout>
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

export default IndexPage

// const API_KEY = process.env.AGILITY_API_KEY

const agilityConfig = {
  guid: process.env.AGILITY_GUID,
  apiKey: process.env.AGILITY_API_KEY,
  isPreview: process.env.AGILITY_API_ISPREVIEW === "true",
}

// console.log(API_KEY);
export async function getServerData() {
  const rest = await fetch(
    "https://api.aglty.io/800c8044/fetch/en-us/page/111",
    {
      headers: {
        APIKEY: //agilityConfig.apiKey,
        // AGILITY_API_ISPREVIEW: agilityConfig.isPreview
          "defaultlive.42fb0e27ae9606d57c06565f2369f5de856c3982facea37d12308ff2d453851f",
      },
    }
  )
  return {
    props: await rest.json(),
  }
}
