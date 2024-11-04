"use client";
import { MENU_ITEMS } from "@/constants/menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = { orientation?: "mobile" | "desktop" };

const Menu = ({ orientation }: Props) => {
  const pathName = usePathname();
  switch (orientation) {
    case "desktop": {
      return (
        <div className="hidden lg:flex gap-10">
          {MENU_ITEMS.map((item) => (
            <Link
              href={item.path}
              className={cn(
                "px-7 py-2 text-lg rounded-[100px] cursor-pointer",
                item.path === pathName &&
                  "border border-[#704FE6] text-[#704FE6] "
              )}
              key={item.id}
            >
              {item.label}
            </Link>
          ))}
        </div>
      );
    }
    case "mobile":
      return (
        <div className="flex flex-col mt-10">
          {MENU_ITEMS.map((menuItem) => (
            <Link
              href={menuItem.path}
              className={cn(
                "rounded-xl flex gap-2 py-2 px-4 items-center",
                pathName == menuItem.path ? "text-[#704FE6]" : ""
              )}
              key={menuItem.id}
            >
              {menuItem.label}
            </Link>
          ))}
        </div>
      );
    default:
      return <></>;
  }
};

export default Menu;
