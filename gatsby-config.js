require(`dotenv`).config();

module.exports = {
    siteMetadata: {
        title: `OpenFlowLabs Website`,
        description: `OpenFlowLabs Website`,
        siteUrl: `https://www.openflowlabs.com/`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-postcss`,
        {
            resolve: 'gatsby-plugin-purgecss',
            options: {
                tailwind: true,
                purgeOnly: ['src/global.css'],
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
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
            },
        },
    ],
};
