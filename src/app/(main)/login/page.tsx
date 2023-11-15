import React from "react";
import LoginForm from "@/components/Sign-in";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
const LoginPage = () => {
  const token = cookies().get("token");
  if (token) {
    redirect("/");
  }
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
