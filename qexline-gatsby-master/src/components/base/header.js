import React from "react"
//import { graphql, useStaticQuery,Link } from "gatsby"
import { Link } from "gatsby"
//import Img from "gatsby-image"
//import {StaticImage} from "gatsby-plugin-image"
import scrollTo from 'gatsby-plugin-smoothscroll';

export default function Header() {
    const [isActive, setisActive] = React.useState(false);
    return (
    <header>
          <section id="header">
            <h1><Link to='/'>
            <img src="/images/logo.svg" alt="キューエックス・ライン" /><br />キューエックス・ライン</Link></h1>
            <nav id="menu">
              <ul>
                <li><button onClick={() => scrollTo('#container')}>TOP</button></li>
                <li><button onClick={() => scrollTo('#about')}>特長と機能</button></li>
                <li><button onClick={() => scrollTo('#price')}>価格</button></li>
                <li><button onClick={() => scrollTo('#contact')}>お問い合わせ</button></li>
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
              <li><button className="sp__link" onClick={() => {scrollTo('#container');setisActive(!isActive)}}>TOP</button></li>
              <li><button className="sp__link" onClick={() => {scrollTo('#about');setisActive(!isActive)}}>特長と機能</button></li>
              <li><button className="sp__link" onClick={() => {scrollTo('#price');setisActive(!isActive)}}>価格</button></li>
              <li><button className="sp__link" onClick={() => {scrollTo('#contact');setisActive(!isActive)}}>お問い合わせ</button></li>
            </ul>
          </nav>
        </header>
    )

}