"use client";
import React, { useRef, useEffect, useState, useMemo } from "react";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

const Testpages2 = ({ token }: { token: RequestCookie | undefined }) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [user, Setuser] = useState();
  // const token = useMemo(() => Cookie.get("token"), []);
  // const cookieStore = cookies();
  // const tokens = cookieStore.get("test");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!token) return;
    try {
      fetch("process.env.NEXT_PUBLIC_API_HOST/api/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: emailRef.current?.value,
          password: passwordRef.current?.value,
        }),
        credentials: "include",
      });
    } catch (e) {
      console.log(e);
    }
    console.log(emailRef.current?.value, passwordRef.current?.value);
  }
  useEffect(() => {
    fetch("process.env.NEXT_PUBLIC_API_HOST/api/users", {
      headers: {
        authorization: "Bearer " + token?.value,
      },
    })
      .then((res) => res.json())
      .then((data) => Setuser(data));
  }, []);
  return (
    <>
      <div>{JSON.stringify(user)}</div>
      <form onSubmit={handleSubmit}>
        <input type="email" ref={emailRef} />
        <input type="password" ref={passwordRef} />
        <button>submit</button>
      </form>
    </>
  );
};
export default Testpages2;
