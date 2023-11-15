import React from "react";
import CategorySection from "@/components/category/category-section";
import ProductSection from "@/components/category/product-section";
import { Metadata } from "next";
export interface Category {
  id: string;
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  product: any[];
}
export interface Product {
  id: string;
  name: string;
  price: number;
  desc: string;
  images: string[];
  stock: number;
  slug: string;
  detail: string;
  createdAt: Date;
  updatedAt: Date;
  category: Category[];
}
async function getAllcategory(): Promise<Category[]> {
  const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + "/api/category", {
    cache: "no-cache",
  });
  const response: Category[] = await res.json();
  return response;
}
async function getProduct(): Promise<Product[]> {
  const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + "/api/products", {
    cache: "no-cache",
  });
  const response = await res.json();
  return response;
}
export const metadata: Metadata = {
  title: "All",
};

async function Categorypage() {
  const categories = await getAllcategory();
  const products = await getProduct();
  return (
    <div className="grid grid-cols-3">
      <CategorySection categories={categories} className="col-span-1" />
      <ProductSection products={products} className="col-span-2" />
    </div>
  );
}

export default Categorypage;
