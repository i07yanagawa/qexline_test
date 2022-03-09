import React from "react"
//import { graphql, useStaticQuery,Link } from "gatsby"
import { Link } from "gatsby"
//import Img from "gatsby-image"
//import {StaticImage} from "gatsby-plugin-image"

export default function Header() {
    const [isActive, setisActive] = React.useState(false);
    return (
    <header>
          <section id="header">
            <h1><Link to='/'>
            <img src="/images/logo.svg" alt="キューエックス・ライン" /><br />キューエックス・ライン</Link></h1>
            <nav id="menu">
              <ul>
                <li><Link to='/'>TOP</Link></li>
                <li><Link to='/#about'>特長と機能</Link></li>
                <li><Link to='/#price'>価格</Link></li>
                <li><Link to='/#contact'>お問い合わせ</Link></li>
              </ul>
            </nav>
            <div id="sp__toggle" className="sp__toggle `navbar-burger burger ${isActive ? 'active' : ''}`" onClick={() => { setisActive(!isActive) }}>
              <span />
              <span />
              <span />
            </div>
          </section>
          <nav id="sp__menu" className={`navbar-burger burger ${isActive ? 'active' : ''}`}>
            <ul>
              <li><Link to='/' className="sp__link">TOP</Link></li>
              <li><Link to='/#about' className="sp__link">特長と機能</Link></li>
              <li><Link to='/#price' className="sp__link">価格</Link></li>
              <li><Link to='/#contact' className="sp__link">お問い合わせ</Link></li>
            </ul>
          </nav>
        </header>
    )

}