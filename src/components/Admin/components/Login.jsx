import React, { useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../supabase/config";

const Login = () => {
  const [session, setSession] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: "http://localhost:5173/admin/organization",
        },
      });
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

    if (session) {
      return navigate("/admin/organization");
    }
    
    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-20 bg-[#FAFAF6]">
      <section className="w-full">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white-800 dark:border-white-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <button
                type="button"
                onClick={handleLogin}
                className="mb-3 flex w-full items-startms-center justify-center rounded bg-black px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white gap-10"
              >
                <FaGoogle />
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
