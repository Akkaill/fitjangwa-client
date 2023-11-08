import React from "react";
import { Product } from "../page";
import { notFound, redirect } from "next/navigation";
import ProductDeatail from "@/components/ProductDetail";

async function getSlug(slug: string) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_HOST + "/api/products?slug=" + slug
  );
  const response: Product = await res.json();
  return response;
}

async function page({ params }: { params: { slug: string } }) {
  const product = await getSlug(params.slug);
  if (!product) return notFound();
  // if (!.find((data) => data.id === id)) return <div>not found</div>;

  return (
    <div>
      <ProductDeatail product={product} />
    </div>
  );
}

export default page;
