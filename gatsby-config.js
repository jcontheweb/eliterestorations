module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.WPGRAPHQL_URL || `https://elitefourstates.justincairns.ca/graphql`,
      },
      includedRoutes: [
        "**/categories",
        "**/posts",
        "**/pages",
        "**/media",
        "**/tags",
        "**/taxonomies",
        "**/users",
        "**/employees",
        "**/services"
      ],
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-catch-links`,
      options: {
        excludePattern: /(excluded-link|external)/,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Elite Carpet Care & Restoration`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#cb3740`,
        theme_color: `#cb3740`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`
      },
    },
  ],
  siteMetadata: {
    title: "Professional Cleaning",
    titleTemplate: "%s - Elite Carpet Cleaning & Restoration",
    description:
      "Professional 24/7 Carpet Cleaning & Restoration.",
    url: "https://www.elitefourstates.com", // No trailing slash allowed!
    image: "/elite-restoration.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@eliterestorations",
  }
}
