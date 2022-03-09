import React from "react"
import {Helmet} from "react-helmet"
import {useStaticQuery,graphql} from "gatsby"

const SEO = props => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                title
                lang
                description
                siteUrl
                type
                locale
                }
            }
        }
    `)
    const title = props.pagetitle ? `${props.pagetitle} | ${data.site.siteMetadata.title}` : data.site.siteMetadata.title
    const description = props.pagedesc || data.site.siteMetadata.description
    const url = props.pagepath ? `${data.site.siteMetadata.siteUrl}${props.pagepath}` : data.site.siteMetadata.siteUrl
    const imageUrl = props.pageimg ? `${data.site.siteMetadata.siteUrl}${props.pageimg}` : `${data.site.siteMetadata.siteUrl}/logo.png`
    const imgw = props.pageimgw || 1280
    const imgh = props.pageimgh || 640
    return (
        <Helmet>
            <html lang={data.site.siteMetadata.lang} />
            <title>{title}</title>
            <meta content="width=device-width,initial-scale=1" name="viewport" />
            <meta name="desciption" content={description} />
            <link rel="canonical" href={url} />
            <meta property="og:description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:image:width" content={imgw} />
            <meta property="og:image:height" content={imgh} />
            <meta property="og:type" content={data.site.siteMetadata.type} />
            <meta property="og:locale" content={data.site.siteMetadata.locale} />
            <meta property="og:site_name" content={title} />
            <meta name="twitter:card" content="summary_large_image" />
            <script src={"/js/adobefont.js"}></script>
        </Helmet>
    )
    
}
export default SEO;