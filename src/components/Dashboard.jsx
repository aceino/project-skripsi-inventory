import React from "react";
import { Link } from "react-router-dom";

import Login from "./Admin/components/Login";
import Token from "./User/components/Token";

function Dashboard() {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-20 bg-[#FAFAF6]">
      <h1 className="text-6xl font-bold">Welcome</h1>
      <div className="flex flex-col text-center gap-10">
        <Link
          to="/admin/login"
          element={<Login />}
          className="bg-[#5D8BF4] hover:bg-[#2D31FA] text-white font-bold py-2 px-4 border border-[#0000FF] rounded text-4xl w-96"
        >
          Admin
        </Link>
        <Link
          to="/user/login"
          element={<Token />}
          className="bg-[#5D8BF4] hover:bg-[#2D31FA] text-white font-bold py-2 px-4 border border-[#0000FF] rounded text-4xl w-96"
        >
          User
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
