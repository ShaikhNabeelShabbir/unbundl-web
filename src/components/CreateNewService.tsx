import React, { useState } from "react";
import CloseIcon from "@/assets/icons/close-icon.svg";
import { Button } from "./ui/button";
import NavbarCreateService from "./navbarcreateservice";

export const CreateNewService = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="flex flex-col w-[600px] h-[582px]">
      <div className="flex flex-row justify-between items-center font-semibold text-xxl">
        <span>Create New Service</span>
        <button className="p-2">
          <img src={CloseIcon} alt="Close" className="w-[24px] h-[24px]" />
        </button>
      </div>
      <NavbarCreateService setStep={setCurrentStep} currentStep={currentStep} />
    </div>
  );
};

export default CreateNewService;
