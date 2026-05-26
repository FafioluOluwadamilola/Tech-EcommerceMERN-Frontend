import React from 'react'
import { Facebook, Twitter, Instagram, Github, Send } from "lucide-react"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (

    <footer className='bg-black text-white mt-24'>

      {/* Top Section */}
      <div className='max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>

        {/* Brand */}
        <div>

          <h1 className='text-3xl font-bold mb-4'>
            TechStore
          </h1>

          <p className='text-gray-400 leading-7'>
            Discover premium gadgets, smartphones, tablets,
            accessories, and modern tech products at unbeatable prices.
          </p>

          {/* Socials */}
          <div className='flex gap-4 mt-6'>

            <div className='bg-white/10 p-3 rounded-full hover:bg-white/20 transition cursor-pointer'>
              <Facebook size={18} />
            </div>

            <div className='bg-white/10 p-3 rounded-full hover:bg-white/20 transition cursor-pointer'>
              <Twitter size={18} />
            </div>

            <div className='bg-white/10 p-3 rounded-full hover:bg-white/20 transition cursor-pointer'>
              <Instagram size={18} />
            </div>

            <div className='bg-white/10 p-3 rounded-full hover:bg-white/20 transition cursor-pointer'>
              <Github size={18} />
            </div>

          </div>

        </div>





        {/* Quick Links */}
        <div>

          <h2 className='text-xl font-semibold mb-5'>
            Quick Links
          </h2>

          <div className='flex flex-col gap-4 text-gray-400'>

            <Link to="/" className='hover:text-white transition'>
              Home
            </Link>

            <Link to="/products" className='hover:text-white transition'>
              Products
            </Link>

            <Link to="/cart" className='hover:text-white transition'>
              Cart
            </Link>

            <Link to="/profile" className='hover:text-white transition'>
              Profile
            </Link>

          </div>

        </div>





        {/* Categories */}
        <div>

          <h2 className='text-xl font-semibold mb-5'>
            Categories
          </h2>

          <div className='flex flex-col gap-4 text-gray-400'>

            <p className='hover:text-white transition cursor-pointer'>
              Phones
            </p>

            <p className='hover:text-white transition cursor-pointer'>
              Tablets
            </p>

            <p className='hover:text-white transition cursor-pointer'>
              Earbuds
            </p>

            <p className='hover:text-white transition cursor-pointer'>
              Headsets
            </p>

            <p className='hover:text-white transition cursor-pointer'>
              Powerbanks
            </p>

          </div>

        </div>





        {/* Newsletter */}
        <div>

          <h2 className='text-xl font-semibold mb-5'>
            Stay Updated
          </h2>

          <p className='text-gray-400 mb-5 leading-7'>
            Subscribe to receive updates on new arrivals,
            discounts, and exclusive offers.
          </p>

          <div className='flex items-center bg-white/10 rounded-xl overflow-hidden'>

            <input
              type="email"
              placeholder='Enter your email'
              className='bg-transparent outline-none px-4 py-3 w-full text-sm'
            />

            <button className='bg-white text-black px-4 py-3 hover:bg-gray-200 transition'>
              <Send size={18} />
            </button>

          </div>

        </div>

      </div>





      {/* Bottom */}
      <div className='border-t border-white/10'>

        <div className='max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400'>

          <p>
            © 2026 TechStore. All rights reserved.
          </p>

          <div className='flex gap-6'>

            <p className='hover:text-white transition cursor-pointer'>
              Privacy Policy
            </p>

            <p className='hover:text-white transition cursor-pointer'>
              Terms of Service
            </p>

            <p className='hover:text-white transition cursor-pointer'>
              Contact
            </p>

          </div>

        </div>

      </div>

    </footer>

  )
}

export default Footer