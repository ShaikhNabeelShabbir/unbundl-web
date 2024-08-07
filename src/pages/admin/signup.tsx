import { useState } from "react";
import { CreateAccountForm } from "@/components/forms/CreateAccountForm";
import { GeneralCompanyInformationForm } from "@/components/forms/GeneralCompanyInformationForm";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import React from "react";
import { ProjectInformationForm } from "@/components/forms/ProjectInformationForm";
import { FundraisingIformationForm } from "@/components/forms/FundraisingInformationForm";

const Signup = () => {
  const [step, setStep] = useState(1);

  const renderForm = () => {
    switch (step) {
      case 1:
        return <CreateAccountForm />;
      case 2:
        return <GeneralCompanyInformationForm />;
      case 3:
        return <ProjectInformationForm />;
      case 4:
        return <FundraisingIformationForm />;
      default:
        return <CreateAccountForm />;
    }
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleCancel = () => {
    // Handle cancel action if needed
    // For now, we reset to step 1
    setStep(1);
  };

  return (
    <div className="main-div flex flex-col min-h-screen px-20">
      <div className="flex gap-6 px-14">
        <div className="flex flex-row py-3 font-semibold w-82 h-24">
          Unbundl
          <div className="px-3 font-medium">
            <a href="" className="py-5 text-gray-500">
              SignUp for founders
            </a>
          </div>
        </div>
      </div>
      <Navbar />
      <hr className="w-1240" />
      {renderForm()}
      <div className="flex justify-center gap-20 py-5 mt-auto">
        <Button className="flex" onClick={handleCancel}>
          Cancel
        </Button>
        <Button className="flex" onClick={handleNext}>
          Next Step
        </Button>
      </div>
    </div>
  );
};

export default Signup;
