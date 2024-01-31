import React, { Component } from 'react'
import "./style.css"
import ResponsiveNavbar from './ResponsiveNavbar'
import Header from './Header'
import PageContent from './PageContent'
import Footer from './Footer'
export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
        <div>
            <ResponsiveNavbar />
            <Header />
            <PageContent />
            <Footer/>

      </div>
    )
  }
}
