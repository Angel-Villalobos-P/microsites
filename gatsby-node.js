const { graphql } = require("gatsby")
const fetch = require("node-fetch")

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
  // createPage({
  //   path: "/test-pageR",
  //   component: require.resolve("./src/templates/test-pageR.js"),
  //   context: {},
  //   defer: true,
  // })
}

// exports.sourceNodes = async ({
//   actions: { createNode },
//   createContentDigest,
// }) => {
//   const result = await fetch(
//     // `https://800c8044-api.agilitycms.cloud/fetch/en-us/page/111`,
//     // `https://api.aglty.io/v1/800c8044/fetch/en-us/graphql`,
//     `https://api.aglty.io/v1/800c8044/fetch/en-us/graphql`,
//     {
//       headers: {
//         APIKEY:
//           "defaultlive.42fb0e27ae9606d57c06565f2369f5de856c3982facea37d12308ff2d453851f",
//       },
//     }
//   )
//   const resultData = await result.json()

//   createNode({
//     nameWithOwner: resultData.name,
//     url: resultData.path,
//     id: `testing`,
//     parent: null,
//     children: [],
//     internal: {
//       type: `MICROSITES`,
//       contentDigest: createContentDigest(resultData),
//     },
//   })
// }

// exports.onCreateNode = async ({
//   node,
//   actions: { createNode },
//   store,
//   cache,
//   createNodeId,
// }) => {
//   console.log("creando node...");
// }
