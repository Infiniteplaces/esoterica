module.exports = {
  siteMetadata: {
    title: `Esoterica`,
    description: `Placeholder copy for site description`,
    author: `Tucker Schoos`,
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
        icon: `src/images/icons/Esoterica-Favicon.png`, // This path is relative to the root of the site.
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
          apiKey: "AIzaSyAaGS6kL9ofgW25lKpU19qjyHcZJpufROU",
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
