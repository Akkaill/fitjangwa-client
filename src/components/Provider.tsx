"use client";
import React, { useEffect } from "react";
import useAuth from "@/hook/use-auth";
import cookies from "js-cookie";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const { load, verifyToken } = useAuth();
  useEffect(() => {
    if (cookies.get("token")) {
      verifyToken();
      load();
    }
  }, []);
  return <div>{children}</div>;
};

export default Provider;
