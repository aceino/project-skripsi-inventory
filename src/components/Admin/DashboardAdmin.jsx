import React, { useEffect, useState } from "react";
import { supabase } from "../../supabase/config";
import { Link, useNavigate } from "react-router-dom";
import Organization from "./components/Organization";
import { VscDiffAdded } from "react-icons/vsc";
import Allitem from "./components/Allitem";
import ItemOff from "./components/ItemOff";
import AddItem from "./components/AddItem";
import Suppliers from "./components/Suppliers";
import Reports from "./components/Reports";

const DashboardAdmin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [organization, setOrganization] = useState("");
  const [activeComponent, setActiveComponent] = useState(""); // Add a new state to keep track of the active component

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        navigate("/admin/login");
      } else {
        setUser(user);
        setUsername(user.user_metadata.username);
        await getOrganization(user.id);
      }
    };

    const getOrganization = async (userId) => {
      const { data, error } = await supabase
        .from("organization")
        .select("name")
        .eq("auth_id", userId)
        .single();

      if (error) {
        console.log(error.message);
      } else {
        setOrganization(data.name);
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

  if (!user) {
    return null; // or a loading spinner
  }

  return (
    <div className="flex justify-center items-start mx-auto w-full p-10 h-screen text-white bg-white">
      <div className="flex flex-col justify-normal items-center lg:w-1/5 bg-black rounded-tl-lg rounded-bl-lg max-h-full p-5">
        <div className="flex flex-col justify-center w-full h-60">
          <div className="w-20 mx-auto lg:w-28">
            <img src={""} alt="logo" />
          </div>

          <div className="flex flex-col gap-2 mt-10">
            <h1 className="font-bold text-lg uppercase">{username}</h1>
            <div className="flex flex-row gap-5 items-center justify-between">
              <h1 className="font-bold text-lg">{organization}</h1>
              <Link to="/admin/organization" element={<Organization />}>
                <VscDiffAdded size={30} />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center w-full h-60 gap-5">
          <button
            onClick={() => setActiveComponent("allItem")}
            className="text-left font-semibold text-lg"
          >
            Items
          </button>
          <button
            onClick={() => setActiveComponent("barangMasuk")}
            className="text-left font-semibold text-lg"
          >
            Incoming Goods
          </button>
          <button
            onClick={() => setActiveComponent("barangKeluar")}
            className="text-left font-semibold text-lg"
          >
            Outgoing Goods
          </button>
          <button
            onClick={() => setActiveComponent("suppliers")}
            className="text-left font-semibold text-lg"
          >
            Suppliers
          </button>
          <button
            onClick={() => setActiveComponent("reports")}
            className="text-left font-semibold text-lg"
          >
            Reports
          </button>
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

      <div className="flex flex-col justify-start items-center w-4/5 bg-[#FAFAF6] rounded-tr-lg rounded-br-lg min-h-full p-5 text-black">
        {activeComponent === "" && (
          <h1 className="relative translate-y-60 text-center font-bold text-4xl">
            WELCOME
          </h1>
        )}
        {activeComponent === "allItem" && <Allitem />}
        {activeComponent === "barangKeluar" && <ItemOff />}
        {activeComponent === "barangMasuk" && <AddItem />}
        {activeComponent === "suppliers" && <Suppliers />}
        {activeComponent === "reports" && <Reports />}
      </div>
    </div>
  );
};

export default DashboardAdmin;
