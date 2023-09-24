import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import Footer from '@/pages/component/footer';
import MyLayout from "@/pages/component/layout";
import SessionCheck from "@/pages/api/sessioncheck";
import AdminDrawer from "@/pages/component/admindrawer";

const AddAdminForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    address: '',
  });

  const [success, setSuccess] = useState('')
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    address: '',
  });

  const {
    reset,
  } = useForm();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let formIsValid = true;
    const newErrors = {};

    if (formData.username.trim() === '') {
      newErrors.username = 'Please fill the username.';
      formIsValid = false;
    }
    if (formData.email.trim() === '') {
      newErrors.email = 'Please fill the email.';
      formIsValid = false;
    }
    if (formData.email.match(/\S+@\S+\.\S+/) === null) {
      newErrors.email = 'Please enter a valid email.';
      formIsValid = false;
    }
    if (formData.password.trim() === '') {
      newErrors.password = 'Please fill the password.';
      formIsValid = false;
    }
    if (formData.password.length < 5) {
      newErrors.password = 'Password must be at least 5 characters long.';
      formIsValid = false;
    }
    if (formData.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/) === null) {
      newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character.';
      formIsValid = false;
    }
    if (formData.address.trim() === '') {
      newErrors.address = 'Please fill the address.';
      formIsValid = false;
    }

    if (!formIsValid) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/admin/addAdmin', formData);
      setSuccess('Admin added successfully');
      reset();
    } catch (error) {
      setSuccess('Admin add unsuccessfull ' + error.response.data.message);
    }
  };
  return (
    <>
    <SessionCheck />
    <MyLayout title="Add Admin" />
    <AdminDrawer />
    <div className="pt-9 sm:ml-64">
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-auto mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="pt-10 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"> Add Admin User </h1>
                <p id="filled_success_help" class="mt-2 text-xs text-green-600 dark:text-green-400">
                  <span class="font-medium"> {success} </span>
                </p>
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="input-group">
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      className={`${
                        errors.username ? 'border-red-500' : 'border-gray-300'
                      } bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                      placeholder="username"
                    />
                    {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
                  </div>
                  <div className="input-group">
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                      <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        } bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                        placeholder="email"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div className="input-group">
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className={`${
                          errors.password ? 'border-red-500' : 'border-gray-300'
                        } bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                        placeholder="password"
                      />
                      {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                  </div>
                  <div className="input-group">
                      <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className={`${
                          errors.address ? 'border-red-500' : 'border-gray-300'
                        } bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                        placeholder="address"
                      />
                      {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                  </div>
                  <button type="submit" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full bg-blue-500 text-white rounded py-2 hover:bg-blue-600 transition duration-300">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  <Footer/> 
  </>
);
};
export default AddAdminForm;