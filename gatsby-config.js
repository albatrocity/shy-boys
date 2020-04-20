const proxy = require("http-proxy-middleware");

module.exports = {
  siteMetadata: {
    title: `Shy Boys`,
    description: `Pop band from Kansas City, MO`,
    author: `@shyboyskc`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `shy-boys`,
        short_name: `shy-boys`,
        start_url: `/`,
        background_color: `#afd4c8`,
        theme_color: `#EE8D9C`,
        display: `minimal-ui`
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-source-google-docs",
      options: {
        folders: ["1C0-aeYtwBGAnvZnbu7iSk47dFL-lBlqS"]
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              quality: 90,
              withWebp: true,
              maxWidth: 1040
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: "yil0oij"
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      proxy({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": ""
        }
      })
    );
  }
};
