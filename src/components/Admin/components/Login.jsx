import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../../supabase/config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        setMsg("Failed to Login");
        setEmail("");
        setPassword("");
        console.log(error.message);
        return;
      }

      if (data.length === 0) {
        setMsg("Email not found");
        setEmail("");
        setPassword("");
        return;
      }

      setMsg("Login successful");
      console.log(data);
    } catch (error) {
      setMsg("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-20 bg-[#FAFAF6]">
      <section className="w-full">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-center font-bold text-4xl ">Login</h1>
              {msg && (
                <div
                  className={`text-center font-bold rounded-md p-5 ${
                    msg.includes("Failed") ||
                    msg.includes("Incorrect") ||
                    msg.includes("Email not found") ||
                    msg.includes("An error occurred.")
                      ? "bg-red-500 text-white"
                      : "bg-green-500 text-white"
                  }`}
                >
                  <p>{msg}</p>
                </div>
              )}
              <form className="max-w-sm mx-auto" onSubmit={handleLogin}>
                <div className="mb-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="name@flowbite.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    id="password"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="*********"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="mb-3 flex w-full items-center justify-center rounded bg-black px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white gap-10"
                >
                  Login
                </button>
              </form>
              <p className="text-sm font-light text-black">
                Belum punya akun ?{" "}
                <Link to="/admin/register" className="font-bold">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
