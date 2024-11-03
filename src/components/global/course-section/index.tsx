import { Button } from "@/components/ui/button";
import React, { Suspense } from "react";
import CourseList from "../course-list";

const CourseSection = () => {
  return (
    <div className="flex flex-col min-h-dvh items-center px-[15.625%] py-36 bg-[url('/image/course-list.jpg')] bg-no-repeat bg-cover">
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-5 w-1/2">
          <div className="uppercase px-[22px] py-1 bg-[#E9E2FF] text-[#704FE6] rounded text-sm w-fit">
            Top RATED Courses
          </div>
          <div className="text-[45px] font-bold text-[#0E2A46]">
            Edunity Courses Student Can Join With Us.{" "}
          </div>
        </div>
        <div className="pt-6">
          <Button
            variant={"default"}
            className="bg-[#704FE6] rounded-full !px-6"
          >
            Load More Courses
          </Button>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <CourseList isTopRated />
      </Suspense>
    </div>
  );
};

export default CourseSection;
