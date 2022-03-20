module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `ACE Group`,
    description: `The ACE Group brings together students with different skillsets to accelerate the Convergence Revolution.`,
    author: `@mattfeng`,
    siteUrl: `https://aceresearch.github.io`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg\/.*\.svg/,
        },
      },
    },
    `gatsby-plugin-sass`,
  ],
}
