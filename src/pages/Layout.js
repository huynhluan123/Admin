import Header from "./Header";
import Login from "../components/Login";
import Register from "../components/Register";
import { useEffect, useState } from "react";
import React from "react";

function Layout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  useEffect(() => {
    const isLogin = localStorage.getItem("login");
    const isRegistered = localStorage.getItem("register");
    if (isLogin) {
      setIsLoggedIn(true);
    }
    if (isRegistered) {
      setIsRegister(true);
    }
  }, []);

  const handleLogout = () => {
    // xử lý đăng xuất
    localStorage.removeItem("login");
    localStorage.removeItem("account");
    setIsLoggedIn(false);
  };
  const handleRegister = () => {
    // xử lý đăng xuất
    localStorage.removeItem("register");
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <Header onLogout={handleLogout} />
      ) : isRegister ? (
        <Register onRegister={handleRegister} />
      ) : (
        <Login />
      )}
    </div>
  );
}

export default Layout;
