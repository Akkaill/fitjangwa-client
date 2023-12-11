import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
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

function ListProduct({ products, className, ...props }: Props) {
  return (
    <div className={cn("", className)} {...props}>
      {products.map((e) => (
        <div key={e.id} className="flex items-center p-10 shadow-sm ">
          <div className=" w-[120px] ">
            <AspectRatio ratio={4 / 3} className=" ">
              <Image
                fill
                src={e.images[0]}
                alt={e.id}
                className="object-cover"
              />
            </AspectRatio>
          </div>
          <div className="flex-grow p-2">
            <h2 className="text-slate-600 font-semibold font-sans">{e.name}</h2>
            <p className="">{e.desc}</p>
            <p className="font-medium">{e.price}</p>
          </div>
          <Link href={"/products/" + e.slug} className={buttonVariants()}>
            Buy
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ListProduct;
