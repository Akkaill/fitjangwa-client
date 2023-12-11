import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
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
type Props = {
  slug?: string;
  className?: string;
};

async function getAllcategory(): Promise<Category[]> {
  const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + "/api/category", {
    cache: "no-cache",
  });
  const response = await res.json();

  return response;
}
async function CategorySection({ slug, className }: Props) {
  const categories = await getAllcategory();
  return (
    <div>
      <div className={cn(className)}>
        <h2 className="text-xl py-4 font-semibold">Category's courses</h2>
        <div className="">
          {categories.map((e) => (
            <Link href={"/category/" + e.slug} key={e.id}>
              <div className="p-2 w-full border-b">{e.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategorySection;
