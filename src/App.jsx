import Login from "./components/Admin/components/Login";
import Dashboard from "./components/Dashboard";

import { Routes, Route } from "react-router-dom";
import Token from "./components/User/components/Token";
import DashboardAdmin from "./components/Admin/DashboardAdmin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin/dashboard" element={<DashboardAdmin />} />
      <Route path="/user/login" element={<Token />} />
    </Routes>
  );
}

export default App;
