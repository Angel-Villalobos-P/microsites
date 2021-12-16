const axios = require("axios")

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

const getData = () =>
  axios.get("https://api.aglty.io/800c8044/fetch/en-us/page/111", {
    headers: {
      APIKEY: "defaultlive.42fb0e27ae9606d57c06565f2369f5de856c3982facea37d12308ff2d453851f",
    },
  })

const getPageData = async () => {
  const {
    data
  } = await getData()
  return data
}

exports.createPages = async ({ actions: { createPage } }) => {
  const data = await getPageData()

  createPage({
    path: "/",
    component: require.resolve("./src/templates/create-page.js"),
    context: { data },
  })
}
