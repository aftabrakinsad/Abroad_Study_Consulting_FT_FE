import { useState, useEffect } from "react";
import axios from "axios";
import MyLayout from "@/pages/component/layout";
import SessionCheck from "@/pages/api/sessioncheck";
import AdminDrawer from "@/pages/component/admindrawer";
import Footer from "@/pages/component/footer";

const ManagersPage = () => {
  const [managers, setManagers] = useState([]);

  useEffect(() => {
    async function fetchManagers() {
      try {
        const response = await axios.get('http://localhost:3001/admin/managers');
        setManagers(response.data);
      } catch (error) {
        console.error('Error fetching managers:', error);
      }
    }

    fetchManagers();
  }, []);

  const handleDeleteManager = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/admin/deleteManager/${id}`);
      setManagers(prevManagers => prevManagers.filter(manager => manager.id !== id));
    } catch (error) {
      console.error('Error deleting manager:', error);
    }
  };

  return (
    <>
      <SessionCheck />
      <MyLayout title="Manager Lists" />
      <AdminDrawer />
      <section className="pt-16 bg-gray-50 dark:bg-gray-900 sm:ml-64">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="text-white bg-gray-50 dark:bg-gray-900 pl-10">
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              {/* <th className="border p-2">Password</th> */}
              <th className="border p-2">Address</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {managers.map((manager) => (
              <tr key={manager.id} className="text-white bg-gray-50 dark:bg-gray-900">
                <td className="border p-2">{manager.id}</td>
                <td className="border p-2">{manager.name}</td>
                <td className="border p-2">{manager.email}</td>
                {/* <td className="border p-2">{manager.password}</td> */}
                <td className="border p-2">{manager.address}</td>
                <td className="border p-2">
                  <button className="text-blue-600">Edit</button>
                  <button className="text-red-600 ml-4" onClick={() => handleDeleteManager(manager.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <Footer />
    </>
  );
};
export default ManagersPage;