import React from "react"
import Layout from "../components/layout"
import CTAFooter from "../modules/CTAFooter"
import Hero from "../modules/Hero"
import MicrositeNavbar from "../modules/MicrositeNavbar"
import TableBlock from "../modules/TableBlock"
import TwoColumnsAndBlackbox from "../modules/TwoColumnsAndBlackbox"
import TwoColumnsLeftContent from "../modules/TwoColumnsLeftContent"

const SEOCopywriting = ({serverData}) => {
  const { zones: { MainContentZone } } = serverData
  return (
    <Layout>
      {MainContentZone && <Hero item={MainContentZone[0]} />}
      {MainContentZone && <MicrositeNavbar item={MainContentZone[1]} />}
      {MainContentZone && <TwoColumnsAndBlackbox item={MainContentZone[2]} />}
      {MainContentZone && <TwoColumnsLeftContent item={MainContentZone[3]} />}
      {MainContentZone && <CTAFooter item={MainContentZone[4]} />}
    </Layout>
  )
}

export async function getServerData() {
  const rest = await fetch(
    "https://api.aglty.io/800c8044/fetch/en-us/page/120?contentLinkDepth=3&expandAllContentLinks=true",
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

export default SEOCopywriting
