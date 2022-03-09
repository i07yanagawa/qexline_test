import React from 'react'
import {Link} from 'gatsby'
import Layout from "../../components/layout/layout_inner"
import SEO from "../../components/seo"


const Contact = () => {


  return(
    <Layout>
    <SEO　pagetitle="お問い合わせありがとうございました" />
    <div class="contact__form">
      <h2>お問い合わせフォーム</h2>
      <p>お問い合わせの受け付けを完了しました。<br />
      後日、担当者よりご連絡いたしますのでしばらくお待ちください。</p>
      <p className="to__top"><Link to='/'>TOPページへ</Link></p>
      </div>
    </Layout>
  )
}

export default Contact
