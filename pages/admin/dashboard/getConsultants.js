import { useState, useEffect } from "react";
import axios from "axios";
import MyLayout from "@/pages/component/layout";
import SessionCheck from "@/pages/api/sessioncheck";
import AdminDrawer from "@/pages/component/admindrawer";
import Footer from "@/pages/component/footer";

const ConsultantPage = () => {
    const [consultants, setConsultants] = useState([]);

    useEffect(() => {
        async function fetchConsultants() {
            try {
                const response = await axios.get('http://localhost:3001/admin/consultants');
                setConsultants(response.data);
            } catch (error) {
                console.error('Error fetching consultants:', error);
            }
        }

        fetchConsultants();
    }, []);

    const handleDeleteConsultant = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/admin/deleteconsultant/${id}`);
            setConsultants(prevConsultants => prevConsultants.filter(consultant => consultant.id !== id));
        } catch (error) {
            console.error('Error deleting consultant:', error);
        }
    };

return (
    <>
        <SessionCheck />
        <MyLayout title="Consultant Lists" />
        <AdminDrawer />

        <section className="pt-16 bg-gray-50 dark:bg-gray-900 sm:ml-64">
            <table className="min-w-full border border-gray-300">
                <thead>
                    <tr className="text-white bg-gray-50 dark:bg-gray-900 pl-10">
                        <th className="border p-2">ID</th>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Phone</th>
                        <th className="border p-2">Email</th>
                        {/* <th className="border p-2">Password</th> */}
                        <th className="border p-2">Country</th>
                        <th className="border p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {consultants.map((consultant) => (
                        <tr key={consultant.id} className="text-white bg-gray-50 dark:bg-gray-900">
                            <td className="border p-2">{consultant.id}</td>
                            <td className="border p-2">{consultant.name}</td>
                            <td className="border p-2">{consultant.phone}</td>
                            <td className="border p-2">{consultant.email}</td>
                            {/* <td className="border p-2">{consultant.password}</td> */}
                            <td className="border p-2">{consultant.country}</td>
                            <td className="border p-2">
                                <button className="text-blue-600">Edit</button>
                                <button className="text-red-600 ml-4" onClick={() => handleDeleteConsultant(consultant.id)}>Delete</button>
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
export default ConsultantPage;