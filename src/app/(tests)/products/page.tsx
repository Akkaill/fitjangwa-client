import React from "react";
import ProductPage from "@/components/Product";
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
async function getAllProduct() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + "/api/products");
  const response: Product[] = await res.json();
  return response;
}
const Page = async () => {
  const products = await getAllProduct();
  return (
    <div className=" grid grid-cols-4 gap-4">
      {products.map((m) => (
        <ProductPage key={m.id} product={m} />
      ))}
    </div>
  );
};

export default Page;
