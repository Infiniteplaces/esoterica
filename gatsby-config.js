module.exports = {
  siteMetadata: {
    title: `Esoterica Capital`,
    description: `The world is changing rapidly. At Esoterica we have the experience to help make sure you're on the right side of that. Our investment themes revolve around the digital economy, which is now even more present in our lives than ever before.`,
    author: `Tucker Schoos`,
    url: "https://www.esotericacap.com",
    image: "/logos/share.png",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icons/Esoterica-Favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ibuw5oxk16h9`,
        accessToken: `jvU1O59dLNbxTcuVwxPZ7PrUXxC_jidJRFmQUsdMYvs`,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://esotericacap.us20.list-manage.com/subscribe/post?u=8d8f193b866b9cfa8f79d00df&amp;id=025d3ca8d6", // add your MC list endpoint here; see instructions below
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: `${process.env.GATSBY_FIREBASE_API_KEY}`,
          authDomain: "esoterica-capital.netlify.app",
          databaseURL: "https://esoweb.firebaseio.com",
          projectId: "esoweb",
          storageBucket: "position_files",
          messagingSenderId: "1068499925024",
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
