import React from "react";
import { SWMEmailArt, SWMPhoneArt } from "../../../components/icons";

const LoginOptionComp = ({ setSelectedLoginOption }) => {
  return (
    <div className="w-full m-auto max-w-[1000px] px-4">
      <h1 className="text-center text-[20px] font-bold mb-[1rem] mt-0">
        <h1 className="mb-5 text-[20px]">How do you wish to login</h1>
        <div className="grid grid-cols-3 items-center">
          <div
            onClick={() => setSelectedLoginOption("email")}
            className="flex-col items-center justify-center cursor-pointer border p-4 rounded-lg border-[#628c23] hover:bg-slate-200 transition-all duration-500"
          >
            <h4 className="text-[16px] mb-2">Email Address</h4>
            <div className="flex justify-center">
              <SWMEmailArt size={150} />
            </div>
          </div>
          or
          <div
            onClick={() => setSelectedLoginOption("phone")}
            className="flex-col items-center justify-center cursor-pointer border p-4 rounded-lg border-[#628c23] hover:bg-slate-200 transition-all duration-500"
          >
            <h4 className="text-[16px] mb-2">Phone Number</h4>
            <div className="flex justify-center">
              <SWMPhoneArt size={150} />
            </div>
          </div>
        </div>
      </h1>
    </div>
  );
};

export default LoginOptionComp;
