import React from 'react'
import Header from '../components/layouts/Header'

const AboutPage = () => {
  return (
    <>

    <Header/>
    <h1 className="text-4xl font-bold mb-6">
            About Our Store
    </h1>

    <p className="text-lg text-slate-700 leading-8">
            Welcome to Store Front, your trusted destination for quality
            products and a convenient online shopping experience. We are
            committed to providing customers with a wide range of products
            that combine quality, affordability, and reliability.
            
            Our goal is to make shopping simple and enjoyable by offering
            an easy-to-use platform, secure transactions, and excellent
            customer service. We continuously work to ensure that our
            customers receive the best products and support possible.
            
            At Store Front, customer satisfaction is our highest priority.
            We believe in building long-term relationships with our customers
            through trust, quality, and outstanding service.
          </p>
          <div>
          <img
            src="/4.jpeg"
            alt="About Store Front"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

</>
  )
}

export default AboutPage