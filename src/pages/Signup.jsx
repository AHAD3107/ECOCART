import React from 'react'
import Login from './Login'

import { Link } from 'react-router-dom';


const Signup = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white text-white px-4">
            <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-lg">
                <img
                    src="/logo.svg" // Replace with your logo path
                    alt="EcoCart"
                    className="mx-auto mb-4 h-10"
                />

                <form className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email address"
                        className="w-full px-4 py-2 rounded-md bg-white text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 rounded-md bg-white text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="password"
                        placeholder="Confirm password"
                        className="w-full px-4 py-2 rounded-md bg-white text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Mobile Number"
                            className="flex-1 px-4 py-2 rounded-md bg-white text-white border border-zinc-700 "
                        />
                        
                    </div>

                    {/* <p className="text-xs text-gray-500">
            By signing up, you consent to our{" "}
            <a href="#" className="underline text-gray-300">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="#" className="underline text-gray-300">
              Privacy Policy
            </a>.
          </p> */}

                    <button
                        type="submit"
                        className="w-full py-1 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium"
                    >
                        Sign up
                    </button>
                </form>

        <div className='text-center '>
                <p className='text-sm'>Already have an account?</p>
                <Link to='/login' className='text-blue-500 hover:underline text-sm'>
                    Log in
                </Link>
            </div>
        </div>
    </div >
    )
}

export default Signup