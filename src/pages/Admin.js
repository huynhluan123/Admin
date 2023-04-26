import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Layout from "./Layout";

function Admin() {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path="/" element={Layout} />
      </Routes>
    </div>
  );
}

export default Admin;
