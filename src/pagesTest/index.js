import React from "react"
import Layout from "../components/layout"
import ClientsAndPartners from "../modules/ClientsAndPartners"
import ContentAndImage from "../modules/ContentAndImage"
import CTAFooter from "../modules/CTAFooter"
import GridListing from "../modules/GridListing"
import Hero from "../modules/Hero"
import TwoColumnsLeftListAndImage from "../modules/TwoColumnsLeftListAndImage"

const IndexPage = ({ serverData }) => {
  // const {
  //   zones: { MainContentZone },
  // } = serverData
  
    return ( 
      <>
        <h1>SSR Page - HOME</h1>
        <img style={{ width: "300px" }} alt="random img" src={serverData.message} />
        <p>Testing ssr page</p>
      </>
    );
}

export default IndexPage


// const agilityConfig = {
//   guid: process.env.AGILITY_GUID,
//   apiKey: process.env.AGILITY_API_KEY,
//   isPreview: process.env.AGILITY_API_ISPREVIEW === "true",
// }

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`)
    if (!res.ok) {
      throw new Error(`Response failed`)
    }
    return {
      props: await res.json(),
    }
  } catch (error) {
    return {
      headers: {
        status: 500,
      },
      props: {},
    }
  }
}

// export async function getServerData() {
//   const rest = await fetch(
//     `https://api.aglty.io/${agilityConfig.guid}/fetch/en-us/page/111`,
//     {
//       headers: {
//         APIKEY: agilityConfig.apiKey,
//       },
//     }
//   )
//   return {
//     props: await rest.json(),
//   }
// }

