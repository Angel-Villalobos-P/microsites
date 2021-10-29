const agility = require("@agility/content-fetch")

const api = agility.getApi({
  guid: "800c8044",
  apiKey:
    "defaultlive.42fb0e27ae9606d57c06565f2369f5de856c3982facea37d12308ff2d453851f",
})

const getGridListingItems = async () => {
  const response = await api.getContentList({
    referenceName: "GridListingItems",
    languageCode: "en-us",
  })
  return response
}

const getTableRows = async () => {
  const response = await api.getContentList({
    referenceName: "Tablerowsnames",
    languageCode: "en-us",
  })
  return response
}
const getTableColumns = async () => {
  const response = await api.getContentList({
    referenceName: "Tablecolumnscontent",
    languageCode: "en-us",
  })
  return response
}

// exports.handler = async (event, context, callback) => {
//   // const listing = await getGridListingItems()
//   // let itemObject = {}
//   await api
//     .getPage({
//       pageID: "101",
//       languageCode: "en-us",
//     })
//     .then(response => {
//       // itemObject = response
//       return callback(null, {
//         statusCode: 200,
//          body: JSON.stringify({response}),
//         // body: JSON.stringify({ item: itemObject, listing: listing }),
//       })
//     })
// }
// exports.handler = async (event, context, callback) => {
//   // const tableRows = await getTableRows()
//   const tableColumns= await getTableColumns()
//   const page = await api.getPage({
//     pageID: "101",
//     languageCode: "en-us",
//   })

//   const tableBlock = {
//     page: page,
//     tableCol: tableColumns
//   }

//   return callback(null, {
//     statusCode: 200,
//     body: JSON.stringify({ tableBlock }),
//   })
// }
exports.handler = async (event, context, callback) => {
  const response = await api.getPage({
    pageID: "101",
    languageCode: "en-us",
    expandAllContentLinks: true,
    contentLinkDepth: 4
  })

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({ response }),
  })
}
