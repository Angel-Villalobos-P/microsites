import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import ClientsAndPartners from "../modules/ClientsAndPartners"
import ContentAndImage from "../modules/ContentAndImage"
import CTAFooter from "../modules/CTAFooter"
import GridListing from "../modules/GridListing"
import Hero from "../modules/Hero"
import TwoColumnsLeftListAndImage from "../modules/TwoColumnsLeftListAndImage"

const Home = ({ serverData }) => {
  // const [content, setContent] = useState({})
  // const heroZone = serverData?.zones?.MainContentZone[0]
  // const contentAndImage = serverData?.zones?.MainContentZone[1]

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
      {MainContentZone && <ContentAndImage item={MainContentZone[4]} />}
      {MainContentZone && <GridListing item={MainContentZone[5]} />}
      {MainContentZone && <ContentAndImage item={MainContentZone[6]} />}
      {MainContentZone && <ClientsAndPartners item={MainContentZone[7]} />}
      {MainContentZone && <ContentAndImage item={MainContentZone[8]} />}
      {MainContentZone && <CTAFooter item={MainContentZone[9]} />}
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
export default Home
