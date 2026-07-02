import React from 'react'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
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
import Counter from './hooks/Counter'
import Classroom from './pages/Classroom'
import DataFetch from './hooks/DataFetch'
import Post from './hooks/Post'
import ProductDisplay from './hooks/ProductDisplay'
import SingleProduct from './hooks/SingleProduct'
import ReduxCounter from './pages/ReduxCounter'
import ReduxPersons from './pages/ReduxPersons'

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
         <Route path = '/count' element= {<Counter />} />
         <Route path = '/class' element= {<Classroom />} />



          <Route path = 'post' element = {<DataFetch/>} />
          <Route path = '/post/:id' element = {<Post/>} />
          <Route path = '/post/*' element = {<PageNotFoud/>} />
          <Route path = 'Product' element = {<ProductDisplay/>} />
          <Route path = 'Product/:id' element = {<SingleProduct/>} />
          <Route path = 'reduxcounter' element = { <ReduxCounter/> } />
          <Route path = 'person' element = {<ReduxPersons/>} />
        
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