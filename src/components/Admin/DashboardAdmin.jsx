import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase/config";

const DashboardAdmin = () => {
  const navigate = useNavigate();
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (navigate("/admin/login"))
  }
  
  return (
    <div className="flex justify-center items-start mx-auto w-full p-10 h-screen text-white">
      <div className="flex flex-col justify-normal items-center lg:w-1/5 bg-[#22092C] rounded-tl-lg rounded-bl-lg max-h-full p-5">
        <div className="flex flex-col justify-center w-full h-60">
          <div className="w-20 mx-auto lg:w-28">
            <img src={""} alt="logo" />
          </div>

          <div className="mt-10">
            <h1 className="font-bold text-lg">nama org</h1>
            <h1 className="font-bold text-lg">nama</h1>
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
            // onClick={Logout}
            className="text-left font-semibold text-lg"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-start items-center w-4/5 bg-red-300 rounded-tr-lg rounded-br-lg min-h-full p-5">
        {/* <Menu /> */}
      </div>
    </div>
  );
};

export default DashboardAdmin;
