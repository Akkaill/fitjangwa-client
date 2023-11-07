"use client";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { CoureseLists } from "./CoureseList";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProductPage = () => {
  const { push } = useRouter();
  return (
    <div>
      <div className="container grid grid-cols-4 gap-4">
        {CoureseLists.map((m) => (
          <Card key={m.id} className="h-auto">
            <CardHeader>
              <CardTitle className="text-xl font-semibold font-serif">
                {m.title}
              </CardTitle>
              <CardDescription>{m.desc}</CardDescription>
            </CardHeader>
            <CardContent className="w-max h-40">
              <Image src={m.href} alt="pic" width={250} height={300}></Image>
            </CardContent>
            <CardFooter className="p-20">
              <Button onClick={() => push(m.link)}>สนใจดูรายละเอียด</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
