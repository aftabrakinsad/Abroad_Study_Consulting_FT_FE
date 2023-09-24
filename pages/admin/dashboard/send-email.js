import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import Footer from '@/pages/component/footer';
import MyLayout from "@/pages/component/layout";
import SessionCheck from "@/pages/api/sessioncheck";
import AdminDrawer from "@/pages/component/admindrawer";

export default function EmailForm() {

    const [success, setSuccess] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    text: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    subject: '',
    text: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/admin/send-email', formData);
      setSuccessMessage('Email sent successfully');
      setErrorMessage('');
    } catch (error) {
      setSuccessMessage('');
      setErrorMessage('Failed to send email');
    }
  };

  return (
    <>
    <SessionCheck />
    <MyLayout title="Send Email" />
    <AdminDrawer />
    <div className="pt-9 sm:ml-64">
        <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-auto mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="pt-10 space-y-4 md:space-y-6 sm:p-8"></div>
      <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Email Form</h1>
      <p id="filled_success_help" class="mt-2 text-xs text-green-600 dark:text-green-400">
                  <span class="font-medium"> {success} </span>
                </p>
      <form onSubmit={handleFormSubmit} className="space-y-4 md:space-y-6">
        <div className="input-group">
          <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Recipient's Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className={`${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      } bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          />
        </div>
        <div>
          <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className={`${
                        errors.subject ? 'border-red-500' : 'border-gray-300'
                      } bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`   }
          />
        </div>
        <div>
          <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message:</label>
          <textarea
            id="text"
            name="text"
            value={formData.text}
            onChange={handleInputChange}
            className={`${
                        errors.text ? 'border-red-500' : 'border-gray-300'
                      } bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          />
        </div>
        <button type="submit" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full bg-blue-500 text-white rounded py-2 hover:bg-blue-600 transition duration-300">Send Email</button>
      </form>
      <span class="font-medium text-white text-center"> {successMessage && <p>{successMessage}</p>} </span>
      {/* {successMessage && <p>{successMessage}</p>} */}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
    </div>
    </section>
    </div>
    </>
  );
}
