module.exports = {
    siteMetadata: {
        title: `Lucas Lombardo`,
        description: `Web developer in the Boston area.`,
        author: `Lucas Lombardo`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${ __dirname }/src/images`
            }
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
                icon: `src/images/favicon.png`
            }
        },
        {
            resolve: `gatsby-source-wordpress`,
            options: {
                baseUrl: `https://lucas-blog.oakpointdigital.com`,
                protocol: `https`,
                hostingWPCOM: false,
                useACF: true,
                auth: {
                    htaccess_user: `lucasl1968`,
                    htaccess_pass: `RZ&3qzbxyWDin^NNo*x63sxRCqqEcL`,
                    htaccess_sendImmediately: false
                },
                // verbose output for debugging
                verboseOutput: false,
                // Set how many pages are retrieved per API request.
                perPage: 100,
                // Set how many simultaneous requests are sent at once.
                concurrentRequests: 10
            }
        },
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-layout`
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // 'gatsby-plugin-offline',
    ]
}
