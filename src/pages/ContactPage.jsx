import React from 'react'
import Header from '../components/layouts/Header'

const ContactPage = () => {
  return (
    <>
      <Header />

      <div className="max-w-1360px mx-auto px-6 py-12">

        <h1 className="text-4xl font-bold text-center mb-10">
          Contact Us
        </h1>

        {/* Top Section: Address + Form */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT SIDE - ADDRESS */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Address</h2>

            <p className="text-slate-700 mb-2">
              📍 Store Front Headquarters
            </p>

            <p className="text-slate-600 mb-2">
              Kathmandu, Nepal
            </p>

            <p className="text-slate-600 mb-2">
              Email: support@storefront.com
            </p>

            <p className="text-slate-600 mb-2">
              Phone: +977-98XXXXXXXX
            </p>

            <p className="text-slate-600">
              We are available Monday to Saturday, 9 AM - 6 PM
            </p>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Send Message</h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-slate-300 px-4 py-2 rounded"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-slate-300 px-4 py-2 rounded"
              />

              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full border border-slate-300 px-4 py-2 rounded"
              ></textarea>

              <button
                type="submit"
                className="bg-slate-800 text-white px-6 py-2 rounded hover:bg-slate-700"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>


        <div className="mt-12">
  <h2 className="text-2xl font-semibold text-center mb-6">
    Find Us Here
  </h2>

  <div className="w-full h-400px rounded-lg overflow-hidden shadow-md relative">
    <iframe
      title="Google Map"
      src="https://www.google.com/maps?q=Kumaripati,+Lalitpur,+Nepal&output=embed"
      className="absolute top-0 left-0 w-full h-full border-0"
      loading="lazy"
    ></iframe>
  </div>
</div>

      </div>
    </>
  )
}

export default ContactPage