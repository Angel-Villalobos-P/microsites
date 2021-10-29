const agility = require("@agility/content-fetch")

const api = agility.getApi({
  guid: "800c8044",
  apiKey:
    "defaultlive.42fb0e27ae9606d57c06565f2369f5de856c3982facea37d12308ff2d453851f",
})

exports.handler = async (event, context, callback) => {
    const response = await api.getPage({
      pageID: "106",
      languageCode: "en-us",
      expandAllContentLinks: true,
      contentLinkDepth: 3
    })
  
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({ response }),
    })
  }