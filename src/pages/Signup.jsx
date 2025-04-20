import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    mobileNumber: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // In a real app, you would validate and store credentials with a backend
    // For now, we'll just store the user info and redirect
    const user = {
      email: formData.email,
      username: formData.email.split('@')[0], // Simple username generation
      mobileNumber: formData.mobileNumber
    };
    
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/account');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-white px-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-lg">
        <img
          src="/logo.svg"
          alt="EcoCart"
          className="mx-auto mb-4 h-10"
        />

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email address"
            className="w-full px-4 py-2 rounded-md bg-white text-black border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-2 rounded-md bg-white text-black border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm password"
            className="w-full px-4 py-2 rounded-md bg-white text-black border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <div className="flex gap-2">
            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="Mobile Number"
              className="flex-1 px-4 py-2 rounded-md bg-white text-black border border-zinc-700"
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

        <div className='text-center mt-4'>
          <p className='text-sm text-black'>Already have an account?</p>
          <Link to='/login' className='text-blue-500 hover:underline text-sm'>
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;