"use client";
import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "@smastrom/react-rating/style.css";
import { Clock, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";
import { API_URL } from "@/constants";

type CourseListProps = {
  isTopRated?: boolean;
};
interface CourseItem {
  _id: string;
  title: string;
  categories: string[];
  price: number;
  rating: number;
  cover_image: string;
  __v: number;
  createdAt: string;
  updatedAt: string;
}

// const myStyles = {
//   itemShapes: RoundedStar,
//   activeFillColor: "#FC6441",
//   inactiveFillColor: "#ffb700",
// };
const CourseList = (props: CourseListProps) => {
  const params = useSearchParams();
  const search = params.get("search");
  const { isTopRated } = props;
  const [courses, setCourses] = useState<CourseItem[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [flag, setFlag] = useState<boolean>(false);

  function convertCentsToDollars(cents: number) {
    return `$${(cents / 100).toFixed(2)}`;
  }

  const handleDeleteCourse = (id: string) => {
    axios
      .post(`${API_URL}/v1/api/delete-course/${id}`)
      .then((data) => {
        console.log(data);
        setFlag((pre) => !pre);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (isTopRated) {
      axios
        .get(`${API_URL}/v1/api/courses`, {
          params: {
            isTopRated,
          },
        })
        .then((data) => {
          console.log("🚀 ~ useEffect ~ data:", data);
          setCourses(data.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get(`${API_URL}/v1/api/courses`, {
          params: {
            page,
            search,
          },
        })
        .then((data) => {
          console.log("🚀 ~ useEffect ~ data:", data);
          setCourses(data.data.data);
          setTotal(data.data.totalCourses);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isTopRated, page, search, flag]);

  return (
    <>
      <div
        className="grid grid-cols-[repeat(1,1fr)] sm:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(3,1fr)] gap-6 w-full"
        id="top-grid"
      >
        {courses.map((course) => {
          return (
            <div
              key={course._id}
              className="flex flex-col p-6 border-dashed border-[#704FE6] border rounded justify-between"
            >
              <div className="relative">
                <Image
                  width={1200}
                  height={1200}
                  alt=""
                  src={course.cover_image}
                  className="rounded w-full aspect-video object-cover"
                />
                <div className="flex absolute bottom-2 left-2 gap-2">
                  {course.categories[0].split(";").map((item, index) => (
                    <Button key={index} className="bg-[#17254E]">
                      {item}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="flex justify-between mt-5">
                <div className="flex gap-2 items-center">
                  <Rating
                    style={{ maxWidth: 80 }}
                    value={course.rating}
                    readOnly
                  />
                  <div className="text-sm">{course.rating}</div>
                </div>
                <div className="flex text-sm items-center gap-1">
                  <Clock size={12} />
                  <div className="text-xs">19h 30m</div>
                </div>
              </div>
              <div className="text-[#0E2A46] text-lg font-semibold">
                {course.title}
              </div>
              <div className="flex justify-between items-center mt-8">
                <div className="text-[#704FE6] text-3xl">
                  {convertCentsToDollars(course.price)}
                </div>
                <AlertDialog>
                  <AlertDialogTrigger>
                    <div className="bg-[#E8324D] py-2 px-3 rounded-md hover:bg-black text-white">
                      <Trash />
                    </div>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="py-8">
                    <AlertDialogHeader>
                      <AlertDialogTitle className="text-center font-bold text-4xl">
                        Are you sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription className="text-center text-black  pt-10">
                        Deleted courses cannot be recovered.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="!justify-center pt-10 gap-10">
                      <AlertDialogAction
                        onClick={() => handleDeleteCourse(course._id)}
                        className="bg-[#704FE6] rounded-full px-8 py-6"
                      >
                        Confirm
                      </AlertDialogAction>
                      <AlertDialogCancel className="border-[#704FE6] border-2 bg-transparent rounded-full px-8 py-6">
                        Cancel
                      </AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          );
        })}
      </div>
      {!isTopRated && (
        <Pagination className="my-10">
          <PaginationContent>
            {Array.from({ length: Math.ceil(total / 12) }, (_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  isActive={page === index + 1}
                  onClick={() => {
                    setPage(index + 1);
                    document.getElementById("course-banner")?.scrollIntoView();
                  }}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
};

export default CourseList;
