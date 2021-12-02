import React from "react"
import Layout from "../components/layout"
import CTAFooter from "../modules/CTAFooter"
import Hero from "../modules/Hero"
import MicrositeNavbar from "../modules/MicrositeNavbar"
import TwoColumnsAndBlackbox from "../modules/TwoColumnsAndBlackbox"
import TableBlock from "../modules/TableBlock"
import TwoColumnsLeftContent from "../modules/TwoColumnsLeftContent"

const EnterprisePPC = ({serverData}) => {
  // const [content, setContent] = useState(null)

  // useEffect(() => {
  //   fetch("/.netlify/functions/enterpriseContent")
  //     .then(res => res.json())
  //     .then(data => setContent(data.response))
  // }, [])

  const {
    zones: { MainContentZone },
  } = serverData
  
  return (
    <Layout>
      {/* {content && <Hero item={content?.zones?.MainContentZone[0]} />}
      {content && <MicrositeNavbar item={content?.zones?.MainContentZone[1]} />}
      {content && <TwoColumnsAndBlackbox item={content?.zones?.MainContentZone[2]} />}
      {content && <TwoColumnsLeftContent item={content?.zones?.MainContentZone[3]} />}
      {content && <TableBlock item={content?.zones?.MainContentZone[4]} />}
      {content && <CTAFooter item={content?.zones?.MainContentZone[5]} />} */}
      {MainContentZone && <Hero item={MainContentZone[0]} />}
      {MainContentZone && <MicrositeNavbar item={MainContentZone[1]} />}
      {MainContentZone && <TwoColumnsAndBlackbox item={MainContentZone[2]} />}
      {MainContentZone && <TwoColumnsLeftContent item={MainContentZone[3]} />}
      {MainContentZone && <TableBlock item={MainContentZone[4]} />}
      {MainContentZone && <CTAFooter item={MainContentZone[5]} />}
    </Layout>
  )
}

export async function getServerData() {
  const rest = await fetch(
    "https://api.aglty.io/800c8044/fetch/en-us/page/102?contentLinkDepth=3&expandAllContentLinks=true",
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

export default EnterprisePPC
