import React from 'react'
import { ArrowRight, Shield, Truck, Zap } from "lucide-react"
import ProductCard from './ProductCard'
import { categories } from '../data/products'


const Hero = () => {
  return (
    <div className='w-full bg-white'>



      {/* Section 1 */}
      <div className='flex flex-col justify-center items-center h-125 bg-[#F5F6FF] p-4'>

        <h1 className='text-[70px] font-bold text-gray-800 mb-4'>Welcome to TechStore</h1>

        <p className='text-lg text-gray-600 max-w-md text-center'>
          Discover the latest smartphones, tablets, audio devices, and accessories. Premium quality, unbeatable prices.
        </p>

        <div className='mt-4 flex  gap-4'>
          <button className='flex gap-2 bg-black hover:bg-black/80 text-white py-2 px-4 rounded-lg transition-colors'>Shop Now <ArrowRight /> </button>
          <button className='bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg transition-colors'>View Phones</button>
        </div>
      </div>




      {/* Section 2 */}
      <div className='flex justify-evenly h-70 gap-1 p-8 border-b border-white/20 shadow-lg'>

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
      <div className='bg-[#F7F7F9] h-auto flex flex-col justify-center items-center p-10'>
        
        <h1 className='font-bold text-3xl'>Shop by Category</h1>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 justify-center mt-6 mb-4'>
          {categories.map((category) => (
            <div key={category.id} className='box border hover:shadow-lg transition-shadow rounded-lg p-6 py-16'>
              <span>{category.name}</span>
            </div>
          ))}
  
        </div>
      </div>


      {/* products section */}
      <section className="max-w-[1600px] mx-auto mt-20 px-10 w-full">
        <div className='flex justify-between items-center mb-10'>
          <h2 className="text-2xl font-bold ">
            Featured Products
          </h2>

          <p className='flex gap-1'>View All <ArrowRight /></p>
        </div>

        <ProductCard />

      </section>

    </div>
  )
}

export default Hero
