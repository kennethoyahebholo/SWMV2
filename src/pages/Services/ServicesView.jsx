import React from "react";
import { ServiceDetails } from "../../utils/serviceDetails";
import ServicesComp from "./ServicesComp";

const ServicesView = () => {
  return (
    <div className="w-full">
      <h1 className="text-center text-[35px] font-bold mb-[6.5rem] mt-3">
        OUR SERVICES
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between w-full h-full place-items-center max-w-[70rem] m-auto gap-6">
        {ServiceDetails?.map((data) => {
          return <ServicesComp key={data.id} {...data} />;
        })}
      </div>
    </div>
  );
};

export default ServicesView;
