import { X } from "lucide-react"

const Login = ({ close }) => {
  return (
    <div>
      <div className="fixed h-screen inset-0 bg-black/40  flex justify-center items-center" onClick={close}>

        <div className=" bg-white w-[24%] h-auto rounded-2xl p-5 " onClick={(e) => e.stopPropagation()}>

            <div className="flex justify-between items-center mb-2 p-2">
              <h1 className="font-bold text-2xl">Login</h1>
              <X onClick={close} className="cursor-pointer" />
            </div>

          <form>

            <div className="reg">
              <label className='block text-sm font-medium text-gray-700 mb-2'>Email Address</label>
              <input className='bg-black/5 p-2  rounded-xl focus:outline-none focus:ring-2 focus:ring-black/40 focus:shadow-xl transition' 
                type='email' 
                placeholder='Enter your Email' 
              />
            </div>

            <div className="reg">
              <label className='block text-sm font-medium text-gray-700 mb-2'>Password</label>
              <input className='bg-black/5 p-2  rounded-xl focus:outline-none focus:ring-2 focus:ring-black/40 focus:shadow-xl transition' 
                type='password' 
                placeholder='Enter your Password' 
              />
            </div>

            <div className="m-3">
              <button className='bg-black text-white py-2 px-4 rounded-xl hover:bg-gray-800 transition cursor-pointer w-full'>Login</button>
            </div>

            <div className="p-5 text-center">
              <p>Don't have an account?
                <a href='/signup' className='font-bold hover:underline'>Sign Up</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login