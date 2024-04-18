import { supabase } from "../../../supabase/config";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import DashboardAdmin from "../DashboardAdmin";

const Organization = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    address: "",
  });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { error } = await supabase.from("organization").insert({
        name: formData.name,
        phone_number: formData.phone_number,
        address: formData.address,
      } );

      if (error) {
        throw new Error(`Error inserting data: ${error.message}`);
      } else {
        setMsg("Successfully added the organization");
      }
    } catch (error) {
      setMsg(`Error: ${error.message}`);
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-20 bg-[#FAFAF6]">
      <section className="w-full">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white-800 dark:border-white-700">
            {msg && (
              <div
                className={`text-center font-bold rounded-md p-5 ${
                  msg.includes("Error inserting") || msg.includes("Error")
                    ? "bg-red-500 text-white"
                    : "bg-green-500 text-white"
                }`}
              >
                <p>{msg}</p>
              </div>
            )}
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <Link
                to="/admin/dashboard"
                element={<DashboardAdmin />}
                className="flex flex-row items-center gap-2 text-lg"
              >
                <FaArrowLeft /> Back
              </Link>

              <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Name of organization
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                </div>

                <div className="mb-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Phone Number
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="phone_number"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                </div>

                <div className="mb-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Address
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="address"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="text-white bg-black hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Organization;
