import React from "react";
import { Link } from "react-router-dom";

import Login from "./Admin/components/Login";
import Token from "./User/components/Token";
import { RiAdminFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

function Dashboard() {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-20 bg-[#FAFAF6]">
      <section className="w-full">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white-800 dark:border-white-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className="flex flex-col text-center gap-10">
                <h1 className="text-6xl font-bold">Welcome</h1>
                <Link
                  to="/admin/login"
                  element={<Login />}
                  className="mb-3 flex w-full items-center justify-center rounded bg-black px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white gap-10"
                >
                  <RiAdminFill />
                  Admin
                </Link>
                <Link
                  to="/user/login"
                  element={<Token />}
                  className="mb-3 flex w-full items-center justify-center rounded bg-black px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white gap-10"
                >
                  <FaUser />
                  User
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
