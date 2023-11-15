"use client";
import useAuth from "@/hook/use-auth";
import React, { useEffect } from "react";
const Wrapper = ({
  authToken,
  children,
}: {
  authToken: string | undefined;
  children: React.ReactNode;
}) => {
  const { token } = useAuth();
  useEffect(() => {
    const setToken = useAuth.setState({ token: token });
  }, []);
  return <div className="container">{token}</div>;
};

export default Wrapper;
