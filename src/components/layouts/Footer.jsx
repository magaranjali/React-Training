import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white mt-auto">
      <div className="max-w-1260px mx-auto px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-blue-400">
              STORE FRONT
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Your one-stop destination for quality products at affordable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#">Home</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Categories</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-lg mb-3">
              Customer Service
            </h3>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Track Order</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-3">
              Contact
            </h3>
            <p className="text-slate-300">Kathmandu, Nepal</p>
            <p className="text-slate-300">info@storefront.com</p>
            <p className="text-slate-300">+977 98XXXXXXXX</p>
          </div>

        </div>

        <hr className="my-6 border-slate-600" />

        <div className="text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} Store Front. All Rights Reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer