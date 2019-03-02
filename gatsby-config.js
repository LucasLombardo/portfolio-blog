module.exports = {
    siteMetadata: {
        title: `Lucas Lombardo`,
        description: `Web developer in the Boston area.`,
        author: `Lucas Lombardo`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${ __dirname }/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `lucas-lombardo-portfolio`,
                short_name: `portfolio`,
                start_url: `/`,
                background_color: `#3DC5AD`,
                theme_color: `#3DC5AD`,
                display: `minimal-ui`,
                icon: `src/images/favicon.png`,
            },
        },
        `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
    ],
}
