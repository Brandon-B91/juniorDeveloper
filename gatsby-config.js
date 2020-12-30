module.exports = {
    siteMetadata: {
        title: `< juniorDeveloper />`,
        description: `Where juniorDevelopers come to talk about all things TechnoWizardry and MechanicalWitch.`,
        author: `Brandon Brown`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        'gatsby-plugin-sass',
        'gatsby-plugin-catch-links',
        {
            resolve: "gatsby-plugin-prettier-eslint",
      options: {
        prettier: {
          patterns: [
            // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
            "**/*.{css,scss,less}",
            "**/*.{json,json5}",
            "**/*.{graphql}",
            "**/*.{md,mdx}",
            "**/*.{html}",
            "**/*.{yaml,yml}",
          ],
        },
        eslint: {
          patterns: "**/*.{js,jsx,ts,tsx}",
          customOptions: {
            fix: true,
            cache: true,
          },
        },
      },
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `path`,
                path: `${__dirname}/src/pages`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: ` < juniorDeveloper />`,
                short_name: `jrDevs`,
                start_url: `index.html`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `standalone`,
                icon: `src/images/code-icon.svg`, // This path is relative to the root of the site.
            },
        },

        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`,
        'gatsby-transformer-remark',
    ],
}