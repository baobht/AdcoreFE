"use client";
import CourseList from "@/components/global/course-list";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export default function Courses() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const params = useSearchParams();
  const searchParam = params.get("search");
  const [debouncedValue, setDebouncedValue] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(search), 500);

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    const controller = new AbortController();

    if (debouncedValue) {
      router.push(`?search=${debouncedValue}`);
    } else {
      router.push(`/courses`);
    }

    return () => controller.abort();
  }, [debouncedValue, router]);

  useEffect(() => {
    if (searchParam) {
      setSearch(searchParam);
    }
  }, [searchParam]);
  return (
    <main className="flex flex-col">
      <div
        id="course-banner"
        className="flex justify-center items-center w-full bg-[url('/image/courses-bg.svg')] bg-no-repeat bg-cover font-bold text-6xl py-24"
      >
        ALL COURSES
      </div>
      <div className="px-[15.625%]">
        <Input
          fullWidth
          className="mt-32 mb-28"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search title or category"
          endIcon={Search}
        />
        <Suspense fallback={<div>Loading...</div>}>
          <CourseList />
        </Suspense>
      </div>
    </main>
  );
}
