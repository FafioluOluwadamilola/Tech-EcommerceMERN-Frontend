import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, User } from 'lucide-react'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'

const Header = () => {

    const [showLogin, setShowLogin] = useState(false)
    const [showSignUp, setShowSignUp] = useState(false)

    return (

        <div className=' sticky top-0 w-full bg-white/40 backdrop-blur-lg border-b border-white/20 py-4 flex gap-4 justify-around items-center shadow-sm'>


            <div>
                <Link to="/" className='flex gap-2'>
                    <div className='bg-linear-to-r from-blue-500 to-purple-500  rounded-lg p-1'>
                        <ShoppingCart className='text-white size-5' />
                    </div>
                    <div className='text-[18px] font-bold'>
                        TechStore
                    </div>
                </Link>
            </div>

            <div className='flex gap-4'>
                <Link to="/" className='text-gray-800 '>Home</Link>
                <Link to="/about" className=' text-gray-800'>About</Link>
                <Link to="/contact" className=' text-gray-800'>Contact</Link>
            </div>

            <div className='flex gap-3 items-center'>

                <nav onClick={() => setShowLogin(true)} className='flex px-2 py-1 gap-2 rounded-lg hover:bg-gray-200 text-gray-800 '><User /> Login</nav>
                <nav onClick={() => setShowSignUp(true)} className='text-white px-2 py-1 bg-black rounded-lg'>Sign Up</nav>

                {showSignUp && <SignUp close={() => setShowSignUp(false)} />}
                {showLogin && <Login close={() => setShowLogin(false)} />}

                <Link>
                    <ShoppingCart size={25} className='text-gray-800' />
                </Link>

            </div>

        </div>

    )
}

export default Header
