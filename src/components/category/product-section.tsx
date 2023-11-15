"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { FiBookmark, FiBook } from "react-icons/fi";
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
type Props = {
  products: Product[];
  className?: string;
};
function ProductSection({ products, className }: Props) {
  return (
    <div className={cn(className, "px-10 py-4")}>
      <div className="flex justify-between items-center">
        <h2>
          {" "}
          All Courses
          <span className="text-sm ">({products.length}list)</span>
        </h2>
        <div className="flex justify-center items-center">
          <Select>
            <h2 className="text-md px-3">Filter</h2>
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Part's muscle</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <h2 className="text-md px-3">Filter</h2>
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Part's muscle</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="px-3">
            <ToggleGroup type="single">
              <ToggleGroupItem value="a" variant={"outline"}>
                <FiBookmark />
              </ToggleGroupItem>
              <ToggleGroupItem value="b">
                <FiBook />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {products.map((e) => (
          <ProductPage key={e.id} product={e} />
        ))}
      </div>
    </div>
  );
}

export default ProductSection;
