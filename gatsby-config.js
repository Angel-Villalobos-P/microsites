require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

//configure your agility plugin with environment variables so that
//your agility api credentials stay secure
const agilityConfig = {
  guid: process.env.AGILITY_GUID,
  apiKey: process.env.AGILITY_API_KEY,
  isPreview: process.env.AGILITY_API_ISPREVIEW === "true",
}

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://performance.pixel506.com`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-preload-fonts`,
    "gatsby-plugin-react-svg",
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          // includePaths: ["/src/styles"],
          includePaths: [`${__dirname}/src/styles`],
        },
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://pixel506.us16.list-manage.com/subscribe/post?u=ee3acba76cbd486761da9040b&amp;id=9687b9d2df", // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-166245641-2",
          //"GA-TRACKING_ID", // Google Analytics / GA
          //"AW-CONVERSION_ID", // Google Ads / Adwords / AW
          //"DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: "OPT_CONTAINER_ID",
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          //respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    // ============ Get content ============
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     typeName: "Test",
    //     fieldName: "test",
    //     url: "https://api.github.com/graphql",
    //     // A `fetch`-compatible API to use when making requests.
    //     fetch: (uri, options = {}) =>
    //       fetch(uri, { ...options, headers: sign(options.headers) }),
    //   },
    // },
    //Simple config, passing URL
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     // Arbitrary name for the remote schema Query type
    //     typeName: "MICROSITES",
    //     // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
    //     fieldName: "microsites",
    //     // Url to query from
    //     // url: `https://api.aglty.io/${agilityConfig.guid}/fetch/en-us/item/1451`,
    //     // url: `https://800c8044-api.agilitycms.cloud/fetch/en-us/page/111`,
    //     // url: `https://api.aglty.io/v1/800c8044/fetch/en-us/graphql`,
    //     url: `https://api.aglty.io/v1/800c8044/fetch/en-us/graphql`,
    //     headers: {
    //       APIKEY:
    //         "defaultlive.42fb0e27ae9606d57c06565f2369f5de856c3982facea37d12308ff2d453851f",
    //     },
    //   },
    // },

    //================> test <===================
    // {
    //   //the name of the plugin
    //   resolve: "@agility/gatsby-source-agilitycms",
    //   //the options for our plugin
    //   options: {
    //     //your Agility Content Fetch API Guid
    //     guid: agilityConfig.guid,
    //     //your Agility Content Fetch API Key
    //     apiKey: agilityConfig.apiKey,
    //     //set this to true if you are using the preview API Key
    //     isPreview: agilityConfig.isPreview,
    //     //set this to true to see expanded traces in the build logs
    //     debug: false,
    //     //the languages you want to source content for
    //     languages: [
    //       {
    //         // The name of the language code
    //         name: "English",
    //         // The actual language code set in Agility CMS
    //         code: "en-us",
    //         // The name to be used in the URL path that represents the current language
    //         path: "en",
    //       },
    //     ],
    //     // The channels you want to include
    //     channels: [
    //       {
    //         // The reference name for the website channel as it is defined in Agility CMS
    //         referenceName: "website",
    //       },
    //     ],
    //     //the page template that will be used to render Agility CMS pages
    //     masterPageTemplate: "./src/AgilityPage.js",
    //   },
    // },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `./src/data`,
        ignore: [`**/\.*`],
      },
    },
  ],
}
