import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, User } from 'lucide-react'

const Header = () => {
    return (
        <div className=' sticky top-0 w-full bg-white/40 backdrop-blur-lg border-b border-white/20 py-4 flex gap-4 justify-around items-center shadow-sm'>


            <div>
                <Link to="/" className='flex gap-2'>
                    <div className='bg-linear-to-r from-blue-500 to-purple-500  rounded-lg p-1'>
                        <ShoppingCart className='text-white size-5' />
                    </div>
                    TechStore
                </Link>
            </div>

            <div className='flex gap-4'>
                <Link to="/" className='text-gray-800 '>Home</Link>
                <Link to="/about" className=' text-gray-800'>About</Link>
                <Link to="/contact" className=' text-gray-800'>Contact</Link>
            </div>

            <div className='flex gap-3 items-center'>
                <Link to="/login" className='flex px-2 py-1 gap-2 rounded-lg hover:bg-gray-200 text-gray-800 '><User /> Login</Link>
                <Link to="/signup" className='text-white px-2 py-1 bg-black rounded-lg'>Sign Up</Link>
                <Link>
                    <ShoppingCart size={25} className='text-gray-800' />
                </Link>
            </div>

        </div>

    )
}

export default Header
