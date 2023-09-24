import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import Footer from '@/pages/component/footer';
import MyLayout from "@/pages/component/layout";
import SessionCheck from "@/pages/api/sessioncheck";
import AdminDrawer from "@/pages/component/admindrawer";

 const four = () => {

    return (
        <>
        <div class="p-44 pt-10 sm:ml-64 dark:bg-gray-800 dark:border-gray-700">
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-auto mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="pt-10 space-y-4 md:space-y-6 sm:p-8">
            <form className='space-y-4 md:space-y-6'>
                <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"> Page Under Maintanance! </h1>
            </form>
            </div>
            </div>
            </div>
            </section>
        </div>
        <Footer />
        </>
    );
};
export default four;