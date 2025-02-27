import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";
export const Nav = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const login = () => {
    setIsLoggedIn(true);
    navigate("/dashboard");
  };
  const logout = () => {
    setIsLoggedIn(false);
  };
  return (
    <>
      <div className="nav_bar">
        <Link className="left items" to={"/"}>
          Wow
        </Link>
        <div id="right">
          {isloggedIn && (
            <>
              <Link className="items" to={"/profile"}>
                Profile
              </Link>
              <Link className="items" to={"/"}>
                Home
              </Link>
              <Link className="items" to={"/meal"}>
                Meal
              </Link>
              <Link className="items" to={"/dashboard"}>
                Dashboard
              </Link>
              <Link className="items" to={"/about"}>
                About
              </Link>
              <Link
                className="items"
                style={{ fontWeight: "bold", background: "gray" }}
                onClick={logout}
              >
                Logout
              </Link>
            </>
          )}
          {!isloggedIn && (
            <>
              <Link className="items" to={"/service"}>
                Service
              </Link>
              <Link className="items" to={"/contact"}>
                Contact
              </Link>
              <Link
                className="items"
                style={{ fontWeight: "bold", background: "gray" }}
                onClick={login}
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};
