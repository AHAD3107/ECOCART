import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would validate credentials with a backend
    // For now, we'll just store the user info and redirect
    const user = {
      email: formData.email,
      username: formData.email.split('@')[0], // Simple username generation
      mobileNumber: '' // Can be updated later
    };
    
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/account');
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-xs bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-center text-primary mb-6">Login To EcoCart</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example@gmail.com"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="*******"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 transition"
            >
              Login
            </button>

            <span>
              Don't have an account? 
              <Link to='/signup' className='text-xs text-blue-500 hover:underline ml-1'>
                Signup
              </Link>
            </span>

            <div className="flex items-center justify-center my-4">
              <div className="h-px bg-gray-300 flex-grow"></div>
              <span className="px-3 text-gray-400 text-sm">or</span>
              <div className="h-px bg-gray-300 flex-grow"></div>
            </div>

            <button className="w-full border border-gray-300 py-2 rounded-md hover:bg-gray-50 transition flex justify-center items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              <span className="text-sm text-gray-700">Continue with Google</span>
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login