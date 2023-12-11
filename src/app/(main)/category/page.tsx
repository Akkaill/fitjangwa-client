import React from "react";
import CategorySection from "@/components/category/category-section";
import ProductSection from "@/components/category/product-section";
import { Metadata } from "next";
import GridProduct from "@/components/category/gird-product";
import ListProduct from "@/components/category/list-product";
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
async function getProduct(sort: string): Promise<Product[]> {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_HOST + "/api/products?sort=" + sort,
    {
      cache: "no-cache",
    }
  );
  const response = await res.json();
  return response;
}
export const metadata: Metadata = {
  title: "All",
};

async function Categorypage({
  searchParams,
}: {
  searchParams: { view: string; sort: string };
}) {
  let sortProduct: string = "";
  const { view, sort } = searchParams;

  switch (sort) {
    case "price_asc":
      sortProduct = "price_asc";
      break;
    case "price_desc":
      sortProduct = "price_desc";
      break;
    case "name_asc":
      sortProduct = "name_asc";
      break;
    case "name_desc":
      sortProduct = "name_desc";
      break;
    case "created_at_asc":
      sortProduct = "created_at_asc";
      break;
    case "created_at_desc":
      sortProduct = "created_at_desc";
      break;
    default:
      sortProduct = "";
      break;
  }
  const products = await getProduct(sortProduct);
  const productView =
    view === "list" ? (
      <ListProduct products={products} />
    ) : (
      <GridProduct products={products} />
    );
  return (
    <div className="grid grid-cols-3">
      <CategorySection className="col-span-1" />
      <ProductSection
        length={products.length}
        className="col-span-2"
        extra={productView}
      />
    </div>
  );
}

export default Categorypage;
