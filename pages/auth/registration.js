import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../component/footer';
import MyLayout from '../component/layout';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/admin/signup', {
        username,
        email,
        password,
        address,
      });

      console.log('Registration response:', response.data);
      if(response.status === 200) {
        alert('Registration successful');
      }
      else
      {
        alert('Registration failed');
      }
      // Handle success, perhaps redirect to a success page
    } catch (error) {
      console.error('Registration error:', error);
      // Handle error, display a message to the user, etc.
    }
  };

  return (
    <>
    <MyLayout title="Registration" />
        <div className="flex justify-center items-center h-screen dark:bg-gray-800 dark:border-gray-700">
        <form className="w-full max-w-sm p-6 bg-white rounded-lg dark:bg-gray-800 dark:border-gray-100">
            <h2 className="text-2xl mb-4 text-white text-center">Registration On Board</h2>
            <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-medium mb-1 text-white">
                Username
            </label>
            <input
                type="text"
                id="username"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            </div>
            <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1 text-white">
                Email
            </label>
            <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            </div>
            <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1 text-white">
                Password
            </label>
            <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            </div>
            <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 font-medium mb-1 text-white">
                Address
            </label>
            <textarea
                id="address"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
            />
            </div>
            <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            onClick={handleSubmit}>Register
            </button>
        </form>
        </div>
        <Footer/>
    </>
  );
};
export default RegistrationForm;