import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const HomeBanner = () => {
  return (
    <div className="flex justify-between min-h-[70dvh] lg:pl-[15.625%] bg-[url('/image/banner.png')] bg-center bg-no-repeat bg-cover gap-5 sm:gap-2 pl-[5%]">
      <div className="flex flex-col justify-center w-1/2">
        <div className="text-xs md:text-md lg:text-lg text-[#704FE6] uppercase">
          Welcome TO Edunity online courses
        </div>
        <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#17254E] font-bold mt-3">
          Achieving Your Dreams Through Education
        </div>
        <div className="text-xs md:text-sm lg:text-md text-[#333931] mt-6">
          We are experienced in educationl platform and skilled strategies for
          the success of our online learning.
        </div>
        <Button
          className="mt-20 text-md bg-[#17254E] rounded-full w-fit px-8 py-6"
          variant={"default"}
        >
          <Link href="/courses">Find Courses</Link>
        </Button>
      </div>
      <div className="w-4/6 sm:w-1/2 lg:min-w-1/2 bg-[url('/image/right-banner.svg')] bg-center bg-cover bg-no-repeat" />
    </div>
  );
};

export default HomeBanner;
