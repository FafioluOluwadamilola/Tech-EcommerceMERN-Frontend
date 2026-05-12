import React from 'react'
import { useCart } from '../context/CartContext';

const Cart = () => {

    const { cart, increaseQty, decreaseQty, removeFromCart, clearCart } = useCart();

    // Calculate total price
    const totalPrice = cart.reduce((total, item) => total + item.price * item.qty, 0);

    return (
        <div className='max-w-6xl mx-auto p-10 min-h-screen'>

            <h1 className='text-4xl font-bold mb-10'>Shopping Cart</h1>

            {/* Empty cart message */}

            {cart.length === 0 ? (
                <p className='text-gray-500'>Your cart is empty.</p>
            ) : (
                <div className='flex flex-col gap-6'>

                    {/* Cart items */}
                    {cart.map((item) => (

                        <div
                            key={item.id}
                            className='flex items-center justify-between border rounded-2xl p-4 shadow-sm'
                        >

                            {/* left side */}
                            <div className='flex items-center gap-4'>
                                {/* flex items-center gap-4 */}
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className='w-28 h-28 object-cover rounded-xl'
                                />
                            </div>

                            <div>

                                <h2
                                    className='font-bold text-lg'>
                                    {item.name}
                                </h2>

                                <p
                                    className='text-gray-500'>
                                    ${item.price}
                                </p>

                                <div className='flex items-center mt-3 gap-3'>
                                    {/* - */}
                                    <button
                                        onClick={() => decreaseQty(item.id)}
                                        className='bg-gray-200 py-1 px-3 rounded-lg hover:bg-gray-300'
                                    >
                                        -
                                    </button>

                                    {/* Quantity */}
                                    <span className='font-bold'>{item.qty}</span>

                                    {/* + */}
                                    <button
                                        onClick={() => (increaseQty(item.id))}
                                        className='bg-gray-200 px-3 py-1 rounded-lg hover:bg-gray-300'
                                    >
                                        +
                                    </button>


                                </div>

                            </div>

                            {/* Right Side */}

                            <div className='flex flex-col items-end gap-3'>
                                <p className='font-bold text-xl'>
                                    ${(item.price * item.qty).toFixed(2)}
                                </p>

                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className='text-red-500 hover:underline'
                                >
                                    Remove
                                </button>

                            </div>

                        </div>

                    ))}

                    {/* Total */}
                    <div className='flex justify-between items-center mt-10 border-t pt-6'>

                        <h2 className='font-bold text-2xl'>Total:</h2>
                        <p className='font-bold text-3xl'>${totalPrice.toFixed(2)}</p>

                    </div>

                    {/* Clear Cart */}
                    <button
                        onClick={clearCart}
                        className='bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800'
                    >
                        Clear Cart
                    </button>

                </div>
            )}

        </div>
    )
}

export default Cart
