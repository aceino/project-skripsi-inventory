import Login from "./components/Admin/components/Login";
import Dashboard from "./components/Dashboard";

import { Routes, Route } from "react-router-dom";
import Token from "./components/User/components/Token";
import DashboardAdmin from "./components/Admin/DashboardAdmin";
import Organization from "./components/Admin/components/Organization";
import Register from "./components/Admin/components/Register";
import AddItem from "./components/Admin/components/AddItem";
import Allitem from "./components/Admin/components/Allitem";
import ItemOff from "./components/Admin/components/ItemOff";
import Supps from "./components/Admin/components/Supps";
import Reports from "./components/Admin/components/Reports";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin/add_item" element={<AddItem />} />
      <Route path="/admin/all_item" element={<Allitem />} />
      <Route path="/admin/ItemOff" element={<ItemOff />} />
      <Route path="/admin/Reports" element={<Reports />} />
      <Route path="/admin/Supps" element={<Supps />} />
      <Route path="/admin/register" element={<Register />} />
      <Route path="/admin/dashboard" element={<DashboardAdmin />} />
      <Route path="/admin/organization" element={<Organization />} />
      <Route path="/user/login" element={<Token />} />
    </Routes>
  );
}

export default App;
