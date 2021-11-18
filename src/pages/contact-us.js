import React from "react"
import Layout from "../components/layout"
import FormSection from "../modules/FormSection"
import Hero from "../modules/Hero"
import Locations from "../modules/Locations"

const ContactUs = ({serverData}) => {
  const {
    zones: { MainContentZone },
  } = serverData

  return (
    <Layout>
      {MainContentZone && <Hero item={MainContentZone[0]} />}
      {MainContentZone && <FormSection item={MainContentZone[1]} />}
      {MainContentZone && <Locations item={MainContentZone[2]} />}
    </Layout>
  )
}

export async function getServerData() {
  const rest = await fetch(
    "https://api.aglty.io/800c8044/fetch/en-us/page/121?contentLinkDepth=3&expandAllContentLinks=true",
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

export default ContactUs
