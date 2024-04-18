import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../../supabase/config";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    repeatPassword: "",
  });

  const [msg, setMsg] = useState("");
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        navigate("/admin/register");
      } else {
        navigate("/admin/dashboard");
        setUser(user);
      }
    };

    getUser();
  }, [navigate]);

  if (!user) {
    return null; // or a loading spinner
  }
  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, [e.target.name]: e.target.value };
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.repeatPassword) {
      setMsg("Your password is not match with confirm password");
      setFormData("");
      return;
    }

    if (formData.password.length < 6) {
      setMsg("Password must be at least 6 characters long");
      setFormData("");
      return;
    }
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: "http://localhost:5173/admin/login",
          data: {
            username: formData.username,
          },
        },
      });

      if (error) {
        setMsg("error, ", error.message);
      } else {
        setMsg("Check your email to verify it");

        console.log(data);
        setFormData("");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-20 bg-[#FAFAF6]">
      <section className="w-full">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-center font-bold text-4xl ">Register</h1>
              {msg && (
                <div
                  className={`text-center font-bold rounded-md p-5 ${
                    msg.includes("error") ||
                    msg.includes("Your password") ||
                    msg.includes("Password must be")
                      ? "bg-red-500 text-white"
                      : "bg-green-500 text-white"
                  }`}
                >
                  <p>{msg}</p>
                </div>
              )}
              <form className="max-w-sm mx-auto" onSubmit={handleRegister}>
                <div className="mb-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    onChange={handleChange}
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                    Username
                  </label>
                  <input
                    name="username"
                    type="username"
                    onChange={handleChange}
                    id="username"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="John Doe"
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
                    onChange={handleChange}
                    id="password"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="*********"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                    Repeat Password
                  </label>
                  <input
                    name="repeatPassword"
                    type="password"
                    onChange={handleChange}
                    id="repeat_password"
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
                Sudah punya akun ?{" "}
                <Link to="/admin/login" className="font-bold">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
