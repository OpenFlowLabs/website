require(`dotenv`).config();

module.exports = {
  siteMetadata: {
    title: `OpenFlowLabs Website`,
    description: `OpenFlowLabs Website`,
    siteUrl: `https://www.openflowlabs.com/`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
        purgeOnly: ['src/main.css'],
        whitelistPatterns: [],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
