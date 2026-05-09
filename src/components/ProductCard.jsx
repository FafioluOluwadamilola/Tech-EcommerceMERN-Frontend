import React from 'react'
import products from '../data/products'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import { useUI } from '../context/UIContext'

const ProductCard = () => {

  const { addToCart } = useCart();
  const { user } = useAuth();
  const { setShowLogin } = useUI();

  const handleAddToCart = (product) => {
    // If user is not logged in, show login modal
    if (!user) {
      setShowLogin(true);
      return;
    }
    //If user is logged in, add product to cart
    addToCart(product);

    console.log("Added to Cart", product.name)

  }

  return (
    <div className='flex justify-center items-center w-full'>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10'>

        {products.map((product) => (

          <div
            key={product.id}
            className="rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden flex flex-col h-full"
          >

            <div className='h-64 bg-red-200 flex items-center justify-center overflow-hidden'>
              <img
                src={product.image}
                alt={product.name}
                className='w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300'
              />
            </div>

            <div className='p-3 mt-2 flex flex-col grow'>
              <div className='flex justify-between items-start gap-2'>
                <h1 className='font-bold text-[17px] cursor-pointer h-12 overflow-hidden text-ellipsis'>{product.name}</h1>
                <p className='text-xs bg-gray-200 px-2 py-0.5 rounded-full flex items-center justify-center whitespace-nowrap shrink-0'>{product.category}</p>
              </div>

              <p className='text-gray-600 cursor-pointer text-sm h-16 overflow-hidden text-ellipsis mt-2'>{product.description}</p>
              <p className='mt-2'>⭐{product.ratings} ({product.reviews}) </p>
            </div>

            <div className='flex justify-between items-center p-3 '>
              <p className='font-extrabold text-xl'>${product.price.toFixed(2)}</p>
              <button 
                onClick={() =>handleAddToCart(product)} 
                className='flex gap-3 bg-black text-white py-1.5 px-2 rounded-lg hover:bg-gray-800 transition-colors'>
                <ShoppingCart />  Add
              </button>
            </div>

          </div>

        ))}


      </div>
    </div>
  )
}

export default ProductCard
