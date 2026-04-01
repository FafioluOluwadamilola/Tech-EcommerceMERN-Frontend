import React from 'react'
import products from '../data/products'
import { ShoppingCart } from 'lucide-react'

const ProductCard = () => {
  return (
    <div className='flex justify-center items-center w-full'>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10'>

        {products.map((product) => (

          <div
            key={product.id}
            className="rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden h-auto"
          >

            <div className='h-100 bg-red-200 flex items-center justify-center'>
              <img
                src={product.image}
                alt={product.name}
                className='w-full object-cover h-full cursor-pointer'
              />
            </div>

            <div className='p-3 mt-2'>
              <div className='flex justify-between'>
                <h1 className='font-bold text-[17px] cursor-pointer'>{product.name}</h1>
                <p className='text-xs bg-gray-200 px-2 py-0.5 rounded-full flex items-center justify-center whitespace-nowrap'>{product.category}</p>
              </div>

              <p className='text-gray-600 cursor-pointer'>{product.description}</p>
              <p className='mt-2'>⭐{product.ratings} ({product.reviews}) </p>
            </div>

            <div className='flex justify-between items-center p-3 '>
              <p className='font-extrabold text-xl'>${product.price.toFixed(2)}</p>
              <button className='flex gap-3 bg-black text-white py-1.5 px-2 rounded-lg '><ShoppingCart />  Add</button>
            </div>

          </div>

        ))}


      </div>
    </div>
  )
}

export default ProductCard
