import React from "react";
import { cn } from "@/lib/utils";
import ToggleView from "./toggle-view";
import FilterProduct from "./filter-product";

type Props = {
  length: number;
  className?: string;
  extra?: React.ReactNode;
};
function ProductSection({ length, className, extra }: Props) {
  return (
    <div className={cn(className, "px-10 py-4")}>
      <div className="flex justify-between items-center">
        <h2>
          {" "}
          All Courses
          <span className="text-sm ">({length}list)</span>
        </h2>
        <FilterProduct />
        <ToggleView />
      </div>
      {extra}
    </div>
  );
}

export default ProductSection;
