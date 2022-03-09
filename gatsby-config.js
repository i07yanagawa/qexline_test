/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title:`選べるオンラインセミナー・展示会開催ツールなら | QEXLINE`,
    description:`ウェビナー・オンライン展示会をもっと気軽に。オンラインイベントプラットフォームQEXLINEなら、簡単にオンラインセミナーや展示会をライブ配信することが可能です。`,
    lang:`ja`,
    siteUrl:`https://qexline.com`,
    locale:`ja_JP`,
    type:`website`,
  },
  plugins: [
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name:`images`,
        path:`${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-WXF9CXV`,
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
            policy: [
              
              /*{
                userAgent: "Googlebot-Image",
                disallow: ["/"],
                sitemap: null,
              },*/

              {
                userAgent: '*',
                allow:'/',
                sitemap: null,
              },
            ],
          },
    },
  ],
}
