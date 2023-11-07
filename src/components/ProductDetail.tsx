"use client";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const ProductDeatial = () => {
  const { push } = useRouter();
  return (
    <div className="container grid grid-cols-3 gap-5  max-h-screen">
      <div className="col-span-1  border-slate-300 border-solid border max-h-max h-120 p-3">
        <div className="h-full">
          <Image src="/cbum.png" alt="logo" width={560} height={560}></Image>
        </div>
      </div>
      <div className="col-span-2 m-2 px-10">
        <p className="font-extrabold  text-2xl font-serif ">
          คอร์สสุขภาพเหมาะเเก่คนวัยทำงาน
        </p>
        <p className=" text-lg pb-2">
          โดยจะประกอบไปด้วยการกายภาพที่สามารถทำได้ที่บ้านเเละฟิตเนส
        </p>
        <p className="text-blue-500 pb-20">1,299 Baht</p>
        <Button className="w-full" onClick={() => push("/")}>
          กดเพื่อสั่งซื้อ
        </Button>
      </div>
    </div>
  );
};

export default ProductDeatial;
