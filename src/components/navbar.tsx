"use client";
import Image from "next/image";
import React from "react";
import Menu from "./menu";
import { Input } from "./ui/input";
import { MenuIcon, Search } from "lucide-react";
import axios from "axios";
import { API_URL } from "@/constants";
import GlassSheet from "./glass-sheet";

const Navbar = () => {
  const [search, setSearch] = React.useState("");

  const onSearch = async () => {
    const data = await axios.get(`${API_URL}/v1/api/courses`, {
      params: {
        search: search,
      },
    });
    console.log("🚀 ~ onSearch ~ data:", data);
  };
  return (
    <header className="w-full bg-white h-[100px] flex justify-between sticky top-0 items-center py-5 z-50 lg:px-[min(300px,15.625%)] sm:px-[5%]">
      <Image src="/image/icon.svg" alt="logo" width={220} height={50} />
      <Menu orientation="desktop" />
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search courses"
        endIcon={Search}
        onIconClick={onSearch}
        className="sm:w-full"
      />
      <GlassSheet triggerClassName="lg:hidden" trigger={<MenuIcon size={30} />}>
        <Menu orientation="mobile" />
      </GlassSheet>
    </header>
  );
};

export default Navbar;
