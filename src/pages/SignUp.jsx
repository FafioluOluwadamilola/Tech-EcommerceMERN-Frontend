import { X } from 'lucide-react'
import { Link } from 'react-router-dom'
import React from 'react'

const SignUp = ({ close, openLogin }) => {
  return (
    <div className='h-screen fixed inset-0 z-50 bg-black/60 flex justify-center items-center' onClick={close}>

      <div className='bg-white w-[24%] h-auto rounded-2xl p-5' onClick={(e) => e.stopPropagation()}>

        <h1 className='flex justify-between items-center text-2xl font-bold text-left'>Create Account <X onClick={close} className='cursor-pointer' /></h1>

        <div className='mt-3'>
          <form>
            <div className='reg'>
              <label className='block text-sm font-medium text-gray-700'>Full Name</label>
              <input className='bg-black/5 p-2  rounded-xl focus:outline-none focus:ring-2 focus:ring-black/40 focus:shadow-xl transition'
                placeholder='Enter your Name'
                required
              />

            </div>

            <div className='reg'>
              <label className='block text-sm font-medium text-gray-700'>Email Address</label>
              <input className='bg-black/5 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/40 focus:shadow-xl transition' 
                type='email' 
                placeholder='Enter your Email'
                required
              />
            </div>

            <div className='reg'>
              <label className='block text-sm font-medium text-gray-700'>Password</label>
              <input className='bg-black/5 p-2  rounded-xl focus:outline-none focus:ring-2 focus:ring-black/40 focus:shadow-xl transition' 
                type='password' 
                placeholder='Create a Password'
                required
              />
            </div>

            <div className='text-center m-3'>
              <button className='bg-black text-white py-2 px-4 rounded-xl hover:bg-gray-800 transition cursor-pointer w-full'>Sign Up</button>
            </div>

            <div className='p-5 text-center'>
              <p>Already have an account? 
                <span onClick={() => openLogin()} className='font-bold hover:underline cursor-pointer'>Log in</span>
              </p>
            </div>

          </form>
        </div>

      </div>

    </div>
  )
}

export default SignUp