import React from "react";
import CategorySection from "@/components/category/category-section";
import ProductSection from "@/components/category/product-section";
import { Metadata } from "next";
import GridProduct from "@/components/category/gird-product";
import ListProduct from "@/components/category/list-product";
import { notFound } from "next/navigation";
import SortProduct from "@/lib/product-sort";
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
async function getcategory(slug: string, sort: string): Promise<Category> {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_HOST +
      "/api/category/" +
      slug +
      "?sort=" +
      sort,
    {
      cache: "no-cache",
    }
  );
  if (res.status === 404) {
    return notFound();
  }
  const response: Category = await res.json();
  return response;
}

export const metadata: Metadata = {
  title: "All",
};

async function SlugCategorypage({
  searchParams,
  params,
}: {
  searchParams: { view: string; sort: string };
  params: { slug: string };
}) {
  const { view, sort } = searchParams;
  const categories = await getcategory(params.slug, SortProduct(sort));

  const productView =
    view === "list" ? (
      <ListProduct products={categories.product} />
    ) : (
      <GridProduct products={categories.product} />
    );
  const extra =
    categories.product.length > 0 ? (
      productView
    ) : (
      <div className="bg-slate-300">KUy</div>
    );
  return (
    <div className="grid grid-cols-3">
      <CategorySection slug={params.slug} className="col-span-1" />
      <ProductSection
        length={categories.product.length}
        className="col-span-2"
        extra={extra}
      />
    </div>
  );
}

export default SlugCategorypage;
