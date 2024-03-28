import React from "react";
import Register from "./Register";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-20 bg-[#FAFAF6]">
      <section className="w-full">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white-800 dark:border-white-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form className="space-y-4 md:space-y-6" action="#">
                <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray">
                  Login
                </h1>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-white-50 border border-white-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-white-50 border border-white-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-white-300 rounded bg-white-50 focus:ring-3 focus:ring-primary-300 dark:bg-white-700 dark:border-white-600 dark:focus:ring-primary-600 dark:ring-offset-white-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="text-black dark:text-black">
                        Ingat saya
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Lupa Password
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Submit
                </button>
                <p className="text-sm font-light text-black dark:text-black">
                  Belum ada akun ?{" "}
                  <Link
                    to="/admin/register"
                    element={<Register />}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Register
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
