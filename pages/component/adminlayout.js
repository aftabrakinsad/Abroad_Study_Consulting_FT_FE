import Link from "next/link";
import { useState } from 'react';
import axios from "axios";

export default function UserLayout(props) {
    const [updatedData, setUpdatedData] = useState({
    username: props.username,
    name: props.name,
    phone: props.phone,
    email: props.email,
    address: props.address,
    country: props.country,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:3001/admin/deleteadmin/${props.id}`);
      console.log('Delete successful:', response.data);
      // Optionally, you can perform other actions after successful deletion
    } catch (error) {
      console.error('Delete failed:', error);
      // Handle error here, show an error message or perform appropriate actions
    }
  };
   
    return (
        <>
        <div className='p-28'>
            <div className="mx-auto w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
               <div className="flex flex-col items-center pb-10">
                    {/* <input type="text" value={updatedData.username} onChange={handleInputChange} 
                    className= "bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    <input type="text" value={updatedData.name} onChange={handleInputChange} 
                    className= "bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    <input type="text" value={updatedData.phone} onChange={handleInputChange} 
                    className= "bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    <input type="text" value={updatedData.email} onChange={handleInputChange} 
                    className= "bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    <input type="text" value={updatedData.address} onChange={handleInputChange} 
                    className= "bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    <input type="text" value={updatedData.country} onChange={handleInputChange} 
                    className= "bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/> */}
                    <h5 className="text-sm text-gray-500 dark:text-gray-400">{props.username}</h5>
                    <h5 className="text-sm text-gray-500 dark:text-gray-400">{props.name}</h5>
                    <span className="textd-sm text-gray-500 dark:text-gray-400">{props.phone}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{props.email}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{props.address}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{props.country}</span>
                    <div className="flex mt-4 space-x-3 md:mt-6">
                        <Link href="/admin/dashboard/Admin/update" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</Link>
                        <button onClick={handleDelete} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Delete</button>
                    </div>
                </div>
            </div>     
        </div>
        </>
    )
}