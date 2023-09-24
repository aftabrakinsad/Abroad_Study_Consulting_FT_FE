import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import Footer from '@/pages/component/footer';
import MyLayout from "@/pages/component/layout";
import SessionCheck from "@/pages/api/sessioncheck";
import AdminDrawer from "@/pages/component/admindrawer";

const AddConsultantForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        country: '',
    });

    const [success, setSuccess] = useState('')
    const [errors, setErrors] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        country: '',
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
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        let formIsValid = true;
        const newErrors = {};

        if (formData.name.trim() === '') {
            newErrors.name = 'Please fill the name.';
            formIsValid = false;
        }
        if (formData.phone.trim() === '') {
            newErrors.phone = 'Please fill the phone.';
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
            newErrors.password = 'Password too weak.';
            formIsValid = false;
        }
        if (formData.country.trim() === '') {
            newErrors.country = 'Please fill the country.';
            formIsValid = false;
        }

        if (!formIsValid) {
            setErrors(newErrors);
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/admin/addConsultant', formData);
            setSuccess(response.data.message);
            reset();
        }
        catch (error) {
            setSuccess(error.response.data.message);
        }
    }
    return (
        <>
        <SessionCheck />
        <MyLayout title="Add Consultant" />
        <AdminDrawer />
        <div className="pt-9 sm:ml-64">
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-auto mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="pt-10 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"> Add Consultant User </h1>
                <p id="filled_success_help" class="mt-2 text-xs text-green-600 dark:text-green-400">
                  <span class="font-medium"> {success} </span>
                </p>
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="input-group">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      } bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                      placeholder="username"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div className="input-group">
                      <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        } bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                        placeholder="phone"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
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
                      <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className={`${
                          errors.country ? 'border-red-500' : 'border-gray-300'
                        } bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                        placeholder="country"
                      />
                      {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
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
    )
}
export default AddConsultantForm;