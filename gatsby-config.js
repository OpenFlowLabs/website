const path = require('path');

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
        'gatsby-plugin-sharp',
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path.join(__dirname, `src`, `images`),
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/src/posts`,
            },
        },
    ],
};
