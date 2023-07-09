import React, { useState } from "react";
import { SWMimages } from "../../assets";
import { Button } from "../../components";

import "./animationStyle.css";

const ServicesComp = ({ ...data }) => {
  const [showHiddenContent, setShowHiddenContent] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowHiddenContent(true)}
      onMouseLeave={() => setShowHiddenContent(false)}
      className="relative bg-[#f5f5f5] max-w-[190px] min-h-[254px] p-[16px] border border-gray-800 transition-all duration-500 ease-in-out rounded-[8px] overflow-hidden"
    >
      <div
        className={`${
          showHiddenContent ? "animate-fadeIn" : "animate-fadeOut"
        } animate`}
      >
        <h5 className="font-bold mb-2 text-[16px]">{data?.title}</h5>
        <p className="text-[14px] leading-5">{data?.subText}</p>
        <div className="text-center absolute bottom-8 left-0 w-full">
          <Button
            variant="full"
            size="sm"
            className="text-[12px] w-[80%] font-bold"
          >
            Proceed
          </Button>
        </div>
      </div>
      <img src={data?.icon} alt="" />
      <h3
        className={`${
          showHiddenContent ? "text-slide-out" : "text-slide-in"
        } text-slide `}
      >
        {data?.name}
      </h3>
    </div>
  );
};

export default ServicesComp;
