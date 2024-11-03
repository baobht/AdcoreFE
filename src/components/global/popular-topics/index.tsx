import Image from "next/image";
import React from "react";

const PopularTopics = () => {
  return (
    <div className="flex flex-col justify-center items-center px-[15.625%] my-24 gap-16">
      <div className="text-[#0E2A46] font-bold text-5xl whitespace-nowrap">
        MOST POPULAR TOPICS
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 max-[768px]:grid-cols-1 gap-6">
        <div className=" flex text-[#0E2A46] font-bold text-[22px] rounded-[10px] items-center gap-5 bg-[#EAF6FF] px-5 py-[25px]">
          <Image
            height={80}
            width={80}
            alt=""
            src={"/image/BusinessManagement.svg"}
          />
          Business Management
        </div>
        <div className=" flex text-[#0E2A46] font-bold text-[22px] rounded-[10px] items-center gap-5 bg-[#FEF2F4] px-5 py-[25px]">
          <Image
            height={80}
            width={80}
            alt=""
            src={"/image/ArtsDesign.svg"}
          />
          Arts & Design
        </div>
        <div className=" flex text-[#0E2A46] font-bold text-[22px] rounded-[10px] items-center gap-5 bg-[#EEFBF5] px-5 py-[25px]">
          <Image
            height={80}
            width={80}
            alt=""
            src={"/image/PersonalDevelopment.svg"}
          />
          Personal Development
        </div>
        <div className=" flex text-[#0E2A46] font-bold text-[22px] rounded-[10px] items-center gap-5 bg-[#FFFAEF] px-5 py-[25px]">
          <Image
            height={80}
            width={80}
            alt=""
            src={"/image/UIUXDesign.svg"}
          />
          UI/UX Design
        </div>
        <div className=" flex text-[#0E2A46] font-bold text-[22px] rounded-[10px] items-center gap-5 bg-[#F7F3FF] px-5 py-[25px]">
          <Image
            height={80}
            width={80}
            alt=""
            src={"/image/GraphicDesign.svg"}
          />
          Graphic Design
        </div>
        <div className=" flex text-[#0E2A46] font-bold text-[22px] rounded-[10px] items-center gap-5 bg-[#FFF0F8] px-5 py-[25px]">
          <Image
            height={80}
            width={80}
            alt=""
            src={"/image/DigitalMarketing.svg"}
          />
          Digital Marketing
        </div>
      </div>
    </div>
  );
};

export default PopularTopics;
