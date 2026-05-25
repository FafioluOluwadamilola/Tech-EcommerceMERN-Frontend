import React from 'react'
import products from '../data/products'
import { ShoppingCart, Star } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import { useUI } from '../context/UIContext'

const ProductCard = () => {

  const { addToCart } = useCart();
  const { user } = useAuth();
  const { setShowLogin } = useUI();

  const handleAddToCart = (product) => {

    // If user is not logged in
    if (!user) {
      setShowLogin(true);
      return;
    }

    // Add to cart
    addToCart(product);

    console.log("Added to Cart", product.name);

  };

  return (

    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 w-full'>

      {products.slice(0, 8).map((product) => (

        <div
          key={product.id}
          className='group overflow-hidden rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300'
        >

          {/* Image */}
          <div className='aspect-square overflow-hidden bg-gray-100'>

            <img
              src={product.image}
              alt={product.name}
              className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer'
            />

          </div>

          {/* Content */}
          <div className='p-4'>

            {/* Name + Category */}
            <div className='flex items-start justify-between gap-2 mb-2'>

              <h1 className='font-semibold text-lg line-clamp-1'>
                {product.name}
              </h1>

              <p className='text-xs bg-gray-100 px-2 py-1 rounded-full shrink-0'>
                {product.category}
              </p>

            </div>

            {/* Description */}
            <p className='text-sm text-gray-500 line-clamp-2 mb-3'>
              {product.description}
            </p>

            {/* Ratings */}
            <div className='flex items-center gap-1 mb-4'>

              <Star className='w-4 h-4 fill-yellow-400 text-yellow-400' />

              <span className='text-sm font-medium'>
                {product.ratings}
              </span>

              <span className='text-sm text-gray-500'>
                ({product.reviews})
              </span>

            </div>

            {/* Footer */}
            <div className='flex items-center justify-between'>

              <p className='text-2xl font-bold'>
                ${product.price.toFixed(2)}
              </p>

              <button
                onClick={() => handleAddToCart(product)}
                className='flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition-colors'
              >

                <ShoppingCart size={16} />
                Add

              </button>

            </div>

          </div>

        </div>

      ))}

    </div>

  )
}

export default ProductCard