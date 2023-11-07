import React from "react";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Registerform from "@/components/Sign-up";
const RegisterPage = () => {
  return (
    <div>
      <Registerform />
    </div>
  );
};

export default RegisterPage;
