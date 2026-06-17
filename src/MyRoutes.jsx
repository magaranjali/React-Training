import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import First from './First'
import Second from './Second'
import LetCinstVar from './pages/LetCinstVar'
import RevisionLayout from './components/layouts/RevisionLayout'
import PageNotFoud from './pages/PageNotFoud'
import Layout from './components/layouts/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicePage from './pages/ServicePage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes >


        <Route index element = {<Layout />}>
        </Route>

    {/* //Landing page */}
         <Route index element= {<HomePage/>} /> 

        {/* //Single route : /second */}
         <Route path = '/about' element= {<AboutPage/>} /> 
         <Route path = '/services' element= {<ServicePage/>} /> 
         <Route path = '/blog' element= {<BlogPage/>} /> 
         <Route path = '/contact' element= {<ContactPage/>} /> 
      
        
        {/* //Nested route : /topic1/content */}
        {/* <Route path = '/topic1' element = {<LetConstVar/>}>
            <Route path = 'content' element = {<h1>Topic 2</h1>} />
        </Route> */}

        {/* <Route path = '/revision' element = {<RevisionLayout/>}>
            <Route path = 'topic1' element = {<LetConstVar/>} />
            <Route index element = {<First/>} />
        </Route>

        <Route path = '*' element = {<PageNotFound/>} />  */}

  
      </Routes>       
    </BrowserRouter>
  )
}

export default MyRoutes