import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import MyCarousel from '../MyCarousel'


const Layout = () => {
  return (
    <>
    <Header />
    <section style = {{minHeight : '80vh'}}>
        <MyCarousel />
    </section>
    <Footer />
    </>
  )
}

export default Layout