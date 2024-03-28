import Login from "./components/Admin/components/Login";
import Dashboard from "./components/Dashboard";

import { Routes, Route } from "react-router-dom";
import Token from "./components/User/components/Token";
import Register from "./components/Admin/components/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin/register" element={<Register />} />
      <Route path="/user/login" element={<Token />} />
    </Routes>
  );
}

export default App;
