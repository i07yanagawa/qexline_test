import React from "react"

import Header from "../../components/base/header"
import Footer from "../../components/base/footer"

import "../styles/layout.css"

export default function Layout({children}){
    return (
    <div>
    <Header />
    {children}
    <Footer />
    <script src={"/js/function.js"}></script>
    </div>
    )
}