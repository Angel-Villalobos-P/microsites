import { graphql } from "gatsby"
import React from "react"

export default ({ data }) => {
  const item = data.microsites.item
  return (
    <div>
      <p>{item.sitename}</p>
    </div>
  )
}

// export const query = graphql`
//   query ($contentID: ID!) {
//     item(where: { id: $contentID }) {
//       itemsName
//     }
//   }
// `

// export const query = graphql`
//   query ($contentID: ID!) {
//     graphQlSource {
//       item(where: { id: $contentID }) {
//         itemsName
//       }
//     }
//   }
// `

// export const query = graphql`
//   {
//     graphQlSource {
//       id
//       fieldName
//     }
//   }
// `
