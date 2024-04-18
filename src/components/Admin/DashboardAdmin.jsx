import React, { useEffect, useState } from "react";
import { supabase } from "../../supabase/config";
import { useNavigate } from "react-router-dom";

const DashboardAdmin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        navigate("/admin/login");
      }
    };

    getUser();
  }, [navigate]);

  async function signOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log(error.message);
    }

    navigate("/");
  }

  return (
    <div className="flex justify-center items-start mx-auto w-full p-10 h-screen text-white bg-white">
      <div className="flex flex-col justify-normal items-center lg:w-1/5 bg-black rounded-tl-lg rounded-bl-lg max-h-full p-5">
        <div className="flex flex-col justify-center w-full h-60">
          <div className="w-20 mx-auto lg:w-28">
            <img src={""} alt="logo" />
          </div>

          <div className="mt-10">
            <h1 className="font-bold text-lg">name</h1>
            <h1 className="font-bold text-lg">organization</h1>
          </div>
        </div>

        <div className="flex flex-col justify-center w-full h-60 gap-5">
          <a href="#" className="text-left font-semibold text-lg">
            Items
          </a>
          <a href="#" className="text-left font-semibold text-lg">
            Item In
          </a>
          <a href="#" className="text-left font-semibold text-lg">
            Item Out
          </a>
          <a href="#" className="text-left font-semibold text-lg">
            Suppliers
          </a>
          <a href="#" className="text-left font-semibold text-lg">
            Reports
          </a>
        </div>

        <div className="flex flex-col justify-center w-full h-60 gap-5">
          <button
            type="button"
            onClick={signOut}
            className="text-left font-semibold text-lg"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-start items-center w-4/5 bg-[#FAFAF6] rounded-tr-lg rounded-br-lg min-h-full p-5">
        {/* <Menu /> */}
      </div>
    </div>
  );
};

export default DashboardAdmin;
