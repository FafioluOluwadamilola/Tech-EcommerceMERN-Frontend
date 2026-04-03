import { X } from 'lucide-react'
import React from 'react'

const SignUp = () => {
  return (
    <div className='flex justify-center items-center h-screen'>

      <div className='bg-red-200 w-[27%] h-[40%] rounded-2xl p-5'>

        <h1 className='flex justify-between items-center text-3xl font-bold text-left'>Create Account <X /></h1>
  
        <div className='mt-6'>
          <form>
            <div className='reg'>
              <label>Full Name</label>
              <input className='p-2 border border-amber-400 rounded-xl shadow-lg shadow-gray-400'></input>
            </div>

            <div className='flex flex-col gap-2'>
              <label>Full Name</label>
              <input className='p-2 border border-amber-400 rounded-xl shadow-lg shadow-gray-400'></input>
            </div>

            <div className='flex flex-col gap-2'>
              <label>Full Name</label>
              <input className='p-2 border border-amber-400 rounded-xl shadow-lg shadow-gray-400'></input>
            </div>

          </form>
        </div>

      </div>

    </div>
  )
}

export default SignUp