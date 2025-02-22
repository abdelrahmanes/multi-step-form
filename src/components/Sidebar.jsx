import React from "react";
import { steps } from "../staticDara";

function Sidebar({ activeStep }) {
  return (
    <div className="col-span-3 md:col-span-1 flex md:flex-col items-center justify-center md:items-start md:justify-start gap-[10px] bg-side-mobile md:bg-side-desktop bg-no-repeat bg-cover md:rounded-lg py-[25px] px-[15px] h-[130px] md:h-full relative">
      {steps.map((step) => (
        <div key={step.id} className="flex items-center gap-[10px] p-[10px]">
          <div
            className={`border border-light-blue rounded-full w-[30px] h-[30px] flex items-center justify-center text-xs mr-2 ${
              activeStep === step.id
                ? "bg-light-blue text-black"
                : "bg-transparent  text-white"
            }`}
          >
            {step.id}
          </div>
          <div className=" flex-col hidden md:flex">
            <h4 className="text-pastel-blue text-sm">{step.subTitle}</h4>
            <h3 className="text-white text-sm font-semibold">{step.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
