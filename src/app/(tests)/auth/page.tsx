"use client";
import React, { useEffect } from "react";
import useAuth from "@/hook/use-auth";
import cookies from "js-cookie";

const Authtest = () => {
  const { login, user, token, logout, setToken, setUser, load, verifyToken } =
    useAuth();
  useEffect(() => {
    setToken(cookies.get("token") || "");
    setUser(JSON.parse(localStorage.getItem("user") || "{}"));

    if (cookies.get("token")) {
      verifyToken();
      load();
    }
  }, []);

  return (
    <div>
      {token ? (
        <>
          {user.name}
          {/* {token} {JSON.stringify(user)} */}
          <button onClick={() => logout()}>Logout</button>
        </>
      ) : (
        <>
          <button onClick={() => login("kkgonza@hotmail.com", "1234123444")}>
            Login
          </button>
        </>
      )}
    </div>
  );
};

export default Authtest;
