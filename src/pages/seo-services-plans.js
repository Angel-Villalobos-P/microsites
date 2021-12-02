import React from "react"
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

const SEOServicesPlans = ({serverData}) => {

  const { zones: { MainContentZone } } = serverData

  return (
    <Layout>
      {MainContentZone && <Hero item={MainContentZone[0]} />}
      {MainContentZone && <MicrositeNavbar item={MainContentZone[1]} />}
      {MainContentZone && <ContentAndImage item={MainContentZone[2]} />}
      {MainContentZone && (<TwoColumnsContentAndList item={MainContentZone[3]} />)}
      {MainContentZone && <TableBlock item={MainContentZone[4]} />}
      {MainContentZone && <GridListing item={MainContentZone[5]} />}
      {MainContentZone && <TwoColumnsContentAndList item={MainContentZone[6]} />}
      {MainContentZone && <TwoColumnsLeftListAndImage item={MainContentZone[7]} />}
      {MainContentZone && <GridListing item={MainContentZone[8]} />}
      {MainContentZone && <TestimonyBlock item={MainContentZone[9]} />}
      {MainContentZone && <ContentAndImage item={MainContentZone[10]} />}
      {MainContentZone && <CTAFooter item={MainContentZone[11]} />}
    </Layout>
  )
}

export async function getServerData() {
  const rest = await fetch(
    "https://api.aglty.io/800c8044/fetch/en-us/page/112?contentLinkDepth=3&expandAllContentLinks=true",
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

export default SEOServicesPlans
