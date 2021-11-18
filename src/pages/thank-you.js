import React from "react"
import Layout from "../components/layout"
import ImageAndInformationSquare from "../modules/ImageAndInformationSquare"

const ThankYou = ({serverData}) => {

  const { zones: { MainContentZone } } = serverData

  return (
    <Layout>
      {MainContentZone && <ImageAndInformationSquare item={MainContentZone[0]} />}
    </Layout>
  )
}

export async function getServerData() {
  const rest = await fetch(
    "https://api.aglty.io/800c8044/fetch/en-us/page/122?contentLinkDepth=3&expandAllContentLinks=true",
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

export default ThankYou
