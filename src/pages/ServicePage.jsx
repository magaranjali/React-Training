import React from 'react'
import Header from '../components/layouts/Header'

const ServicePage = () => {
  return (
    <>
      <Header />

      <div className="max-w-1360px mx-auto px-6 py-12">

        <h1 className="text-4xl font-bold text-center mb-10">
          Our Services
        </h1>

        {/* 2 rows x 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold mb-3">Fast Delivery</h2>
            <p className="text-slate-600">
              Quick and safe delivery to your doorstep.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold mb-3">Secure Payment</h2>
            <p className="text-slate-600">
              Safe and encrypted payment system.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold mb-3">24/7 Support</h2>
            <p className="text-slate-600">
              We are always here to help you anytime.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold mb-3">Easy Returns</h2>
            <p className="text-slate-600">
              Hassle-free return policy for all products.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold mb-3">Best Quality</h2>
            <p className="text-slate-600">
              We ensure high-quality products only.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold mb-3">Affordable Prices</h2>
            <p className="text-slate-600">
              Best products at reasonable prices.
            </p>
          </div>

        </div>

      </div>
    </>
  )
}

export default ServicePage