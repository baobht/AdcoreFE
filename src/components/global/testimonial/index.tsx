import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div className="bg-[url('/image/testimonial.jpg')] bg-no-repeat bg-cover py-20 flex flex-col justify-center items-center">
      <div className="uppercase px-[22px] py-1 bg-[#E9E2FF] text-[#704FE6] rounded text-sm w-fit">
        testimonial
      </div>
      <div className="text-[#0E2A46] font-bold text-5xl w-[45%] text-center my-10">
        Creating A Community Of Life Long Learners.
      </div>
      <Carousel className="w-3/4">
        <CarouselContent>
          {Array.from({ length: 6 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 relative pt-3"
            >
              <Image
                height={46}
                width={46}
                alt=""
                src={"/image/image.svg"}
                className="absolute top-0"
              />
              <div className="p-1">
                <Card className="bg-transparent">
                  <CardContent className="flex flex-col p-8 ">
                    <span>
                      “Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Orci nulla
                      pellentesque dignissim enim. Amet consectetur adipiscing”
                    </span>
                    <div className="font-bold text-[#0E2A46] my-4">
                      Kathy Sullivan
                    </div>
                    <div className="font-bold text-[#704FE6]">
                      CEO at Edwards
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Testimonial;
