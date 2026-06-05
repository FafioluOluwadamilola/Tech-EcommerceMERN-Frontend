import React from 'react'
import { ArrowRight, Shield, Truck, Zap } from "lucide-react"
import ProductCard from './ProductCard'
import products, { categories } from '../data/products'
import { Link } from 'react-router-dom'



const Hero = () => {
  return (
    <div className='bg-white'>

      {/* Section 1 */}
      <div className='text-center flex flex-col justify-center items-center h-auto md:h-125 bg-[#F5F6FF] p-6'>

        <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4'>Welcome to TechStore</h1>

        <p className='text-lg text-gray-600  text-center'>
          Discover the latest smartphones, tablets, audio devices, and accessories. Premium quality, unbeatable prices.
        </p>

        <div className='mt-4 flex flex-col gap-4 sm:flex-row'>
          <Link to='/products' className='flex gap-2 bg-black hover:bg-black/80 text-white py-2 px-4 rounded-lg transition-colors'>Shop Now <ArrowRight /> </Link>
          <Link to='/products' className='bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg transition-colors'>View Phones</Link>
        </div>
      </div>


      {/* Section 2 */}
      <div className='flex flex-col md:flex-row justify-evenly gap-9 p-8 border-b border-white/20 shadow-lg h-auto'>

        <div className='flex flex-col items-center justify-center gap-2'>
          <div className='bg-blue-100 p-4 rounded-full text-blue-600'><Zap /></div>
          <h2 className='font-bold'>Fast Delivery</h2>
          <p className='text-gray-600 text-center'>Get your products delivered in 2-3 business days</p>
        </div>

        <div className='flex flex-col items-center justify-center gap-2'>
          <div className='bg-green-100 p-4 rounded-full text-green-600'><Shield /></div>
          <h2 className='font-bold'>Secure Shopping</h2>
          <p className='text-gray-600 text-center'>Your data is protected with industry-standard encryption</p>
        </div>

        <div className='flex flex-col items-center justify-center gap-2'>
          <div className='bg-purple-100 p-4 rounded-full text-purple-600'><Truck /></div>
          <h2 className='font-bold'>Free Returns</h2>
          <p className='text-gray-600 text-center'>30-day return policy on all products</p>
        </div>

      </div>



      {/* Category Section */}
      <div className='bg-[#F7F7F9] h-auto flex text-center flex-col justify-center items-center p-20 w-full'>

        <h1 className='font-bold text-3xl mb-4'>
          Shop by Category
        </h1>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-center mt-6 mb-2'>

          {categories.map((category) => (

            <Link
              key={category.id}
              to={`/products?category=${category.id}`}
              className='border hover:shadow-lg hover:-translate-y-1 transition-all rounded-2xl p-6 border-gray-300 bg-white'
            >

              <div className='flex flex-col items-center gap-4 text-gray-700 text-md font-medium'>

                <span className='text-4xl'>
                  {category.icon}
                </span>

                <span>
                  {category.name}
                </span>

              </div>

            </Link>

          ))}

        </div>

      </div>


      {/* products section */}
      <section className="max-w-7xl mx-auto mt-20 px-10 w-full">
        <div className='flex  gap-4 md:justify-between items-center mb-10'>
          <h2 className="text-2xl font-bold ">
            Featured Products
          </h2>

          <Link to="/products" className='flex'>View All <ArrowRight /></Link>
        </div>

        <ProductCard products={products.slice(0, 8)} />

      </section>

    </div>
  )
}

export default Hero
