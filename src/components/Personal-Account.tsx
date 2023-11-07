"use client";
import useAuth from "@/hook/use-auth";
import React from "react";

const PersonalAccount = () => {
  const { user } = useAuth();
  return (
    <div>
      <p className="bg-slate-200">{user.name}</p>

      <p>{user.email}</p>
      <p> {user.phone}</p>

      <p>{user.address}</p>
    </div>
  );
};

export default PersonalAccount;
