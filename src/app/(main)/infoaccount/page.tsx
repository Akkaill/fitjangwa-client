import React from "react";
import PersonalAccount from "@/components/Personal-Account";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Infotest = () => {
  const token = cookies().get("token");
  if (!token) redirect("/");
  return (
    <div>
      <PersonalAccount />
    </div>
  );
};

export default Infotest;
