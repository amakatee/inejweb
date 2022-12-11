import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import LinesOverLay from './LinesOverLay'

const Layout = ({children}) => {
  return (
      <>
      <Navbar />
      <LinesOverLay />
      {children}
      <Footer/>
      </>

  )
}

export default Layout