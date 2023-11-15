"use client";
import useAuth from "@/hook/use-auth";
import React from "react";

const Authtest = () => {
  const { token } = useAuth();
  return <div>{token}</div>;
};
export default Authtest;
