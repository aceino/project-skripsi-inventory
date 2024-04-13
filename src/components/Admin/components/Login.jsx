import React, { useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../../supabase/config";

const Login = () => {
  const [session, setSession] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: "http://localhost:5173/admin/dashboard",
        },
      });

      if (error) {
        console.error("Error during login:", error);
      } else {
        // Store the session in local storage
        localStorage.setItem(
          "supabase.auth.session",
          JSON.stringify(data.session)
        );
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (session) {
      navigate("/admin/dashboard");
    }
  }, [session, navigate]);

  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-20 bg-[#FAFAF6]">
      <section className="w-full">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-center font-bold text-4xl ">Login</h1>
              <form className="max-w-sm mx-auto">
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
                  />
                </div>

                <button
                  type="submit"
                  className="mb-3 flex w-full items-center justify-center rounded bg-black px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white gap-10"
                >
                  Register
                </button>
              </form>
              <p className="text-sm font-light text-black">
                Belum punya akun ? <Link to="/admin/register">Register</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
