"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
type SortProduct =
  | "price_asc"
  | "price_desc"
  | "name_asc"
  | "name_desc"
  | "created_at_asc"
  | "created_at_desc";

type Sort = {
  type: SortProduct;
  label: string;
};

const sort: Sort[] = [
  {
    type: "created_at_asc",
    label: " Most sales",
  },
  {
    type: "price_asc",
    label: "Lowest price",
  },
  { type: "price_desc", label: "Highest price" },
  { type: "name_asc", label: "A-Z" },
  { type: "created_at_desc", label: "Last updated" },
];
function FilterProduct() {
  const { replace } = useRouter();
  const pathName = usePathname();
  const sortQuery = useSearchParams().get("sort");
  const viewQuery = useSearchParams().get("view");
  const [value, setValue] = React.useState(sortQuery || "created_at_asc");
  const [open, setOpen] = React.useState(false);
  let replaceQuery = viewQuery ? `?view=${viewQuery}&sort=` : "?sort=";

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value ? sort.find((s) => s.type === value)?.label : "A-Z"}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Products..." className="h-9" />
          <CommandEmpty>No Products found.</CommandEmpty>
          <CommandGroup>
            {sort.map((s) => (
              <CommandItem
                key={s.type}
                value={s.type}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                  replace(
                    pathName +
                      (currentValue === value
                        ? ""
                        : replaceQuery + currentValue)
                  );
                }}
              >
                {s.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === s.type ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default FilterProduct;
