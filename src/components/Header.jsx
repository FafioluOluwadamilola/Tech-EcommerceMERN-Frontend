import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, User } from 'lucide-react'

const Header = () => {
    return (
        <div className=' sticky top-0 w-full bg-[#ffffff]/95 backdrop-blur-lg border-b border-white/20 py-4 flex gap-4 justify-around shadow-sm'>
            

            <div>
                <Link to="/" className='flex gap-4'><ShoppingCart /> TechStore</Link>
            </div>

            <div className='flex gap-4'>
                <Link to="/" className='hover:text-blue-600 text-gray-800 transition-colors'>Home</Link>
                <Link to="/about" className='hover:text-blue-600 text-gray-800 transition-all'>About</Link>
                <Link to="/contact" className='hover:text-blue-600 text-gray-800 transition-all'>Contact</Link>
            </div>

            <div className='flex gap-4'>
                <Link to="/login" className=' flex gap-4 hover:text-blue-600 hover:bg-blue-100 rounded-2xl hover:p-0.5 text-gray-800 transition-all'><User /> Login</Link>
                <Link to="/signup" className='hover:text-blue-600 text-gray-800 transition-all'>Sign Up</Link>
                <Link>
                    <ShoppingCart size={25} className='text-gray-800 hover:text-blue-600   transition-all' />
                </Link>
            </div>

        </div>

    )
}

export default Header
