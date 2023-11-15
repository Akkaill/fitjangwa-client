"use client";
import React from "react";
import Image from "next/image";
import { Button, buttonVariants } from "./ui/button";
import { useRouter } from "next/navigation";
import { CoureseLists } from "./CoureseList";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface Product {
  id: string;
  name: string;
  price: number;
  desc: string;
  images: string[];
  stock: number;
  detail: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  category: Category[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

function ProductPage({ product }: { product: Product }) {
  const { push } = useRouter();

  return (
    <Card className="h-auto">
      <CardHeader>
        <CardTitle className="text-xl font-semibold font-serif">
          {product.name}
        </CardTitle>
        <CardDescription>{product.desc}</CardDescription>
      </CardHeader>
      <CardContent className="w-max h-40 ">
        <Image
          src={product.images[0]}
          alt="pic"
          width={225}
          height={300}
          style={{ objectFit: "cover" }}
          className="bg-cover"
        ></Image>
      </CardContent>
      <CardFooter className="p-5">
        <Link href={`/products/${product.slug}`} className={buttonVariants()}>
          สนใจดูรายละเอียด
        </Link>
      </CardFooter>
    </Card>
  );
}

export default ProductPage;
