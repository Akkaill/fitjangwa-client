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
  categories: Category[];
  className?: string;
};
function CategorySection({ categories, className }: Props) {
  return (
    <div>
      <div className={cn(className)}>
        <h2 className="text-xl py-4 font-semibold">Category's couses</h2>
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
