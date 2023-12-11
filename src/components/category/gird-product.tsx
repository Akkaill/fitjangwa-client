import React from "react";
import { cn } from "@/lib/utils";
import ProductPage from "../Product";
export interface Category {
  id: string;
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  product: any[];
}
interface Product {
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
type Props = React.HtmlHTMLAttributes<HTMLDivElement> & {
  products: Product[];
  className?: string;
};

function GridProduct({ products, className, ...props }: Props) {
  return (
    <div>
      {" "}
      <div className={cn("grid grid-cols-3 gap-4", className)} {...props}>
        {products.map((e) => (
          <ProductPage key={e.id} product={e} />
        ))}
      </div>
    </div>
  );
}

export default GridProduct;
