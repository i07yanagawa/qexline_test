import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const NotFound = ({location}) =>(
    <Layout>
        <SEO pagepath={location.pathname} />
        <div class="contact__form">
        <h2>404 not found.</h2>
        <p>お探しのページは見つかりません</p>
        </div>
    </Layout>
)
export default NotFound