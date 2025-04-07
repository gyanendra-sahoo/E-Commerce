import React from 'react';
import { Link } from 'react-router-dom';
import register from '../assets/register.webp';

const Register = () => {
  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-medium">Luxora</h2>
          </div>

          <h2 className="text-2xl font-bold text-center mb-6">Hey there! 👋</h2>
          <p className="text-center mb-6">
            Enter your username and password to Login.
          </p>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              placeholder="Enter your email address"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full p-2 border rounded"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white p-2 font-semibold rounded-lg hover:bg-gray-800 transition duration-300"
          >
            Sign Up
          </button>
          <p className='mt-6 text-center text-sm'>
            I have already an account?{" "}
            <Link to='/login' className='text-blue-500'>Login</Link>
          </p>
        </form>
      </div>
      <div className='hidden md:block w-1/2 bg-gray-800'>
        <div className='h-full flex flex-col justify-center items-center'>
            <img src={register} alt="Login to Account" className='h-[750px] w-full object-cover' />
        </div>
      </div>
    </div>
  );
};

export default Register;
