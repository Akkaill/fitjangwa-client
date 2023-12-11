"use client";
import React from "react";
import { FiBookmark, FiBook } from "react-icons/fi";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";

function ToggleView() {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const Checkview = searchParams.get("view");
  const sortQuery = useSearchParams().get("sort");

  const replaceQuery = sortQuery ? `?sort=${sortQuery}&view=` : "?view=";
  const view = Checkview === "list" ? true : false;
  const { replace } = useRouter();
  return (
    <div className="px-3 flex">
      <Button
        disabled={!view}
        onClick={() => replace(pathName + replaceQuery + "grid")}
      >
        <FiBookmark />
      </Button>
      <Button
        disabled={view}
        onClick={() => replace(pathName + replaceQuery + "list")}
      >
        <FiBook />
      </Button>
    </div>
  );
}

export default ToggleView;
