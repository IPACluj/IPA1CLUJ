"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";
import qs from "query-string";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  weight: "400",
  subsets: ["latin"],
});
interface CatMenuProps {
  categories: { name: string }[];
}

const CatMenu = ({ categories }: CatMenuProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  // console.log(id)
  const onClick = (id: string | undefined) => {
   
    const query = { id };

    
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div
      className={cn(
        " justify-center md:text-md text-sm overflow-x-auto mt-3 flex",
        font.className
      )}
    >
      
      <div className="shadow-xl">
        {categories.map((item, index) => (
          <button
            onClick={() => onClick(item.name)}
            key={index}
            className={cn(
              "first:rounded-l-md transition duration-300 last:rounded-r-md  px-4  py-2  ",
              item.name == id
                ? " bg-primary/25 border-b-2 border-blue-500"
                : "bg-primary/10 ",
              id == null && index == 0
                ? " bg-primary/25 border-b-2 border-blue-500"
                : " "
            )}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CatMenu;
