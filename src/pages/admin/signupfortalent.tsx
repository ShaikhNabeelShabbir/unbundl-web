import { useState } from "react";
import { CreateAccountForm } from "@/components/forms/CreateAccountForm";
import { Button } from "@/components/ui/button";
import Navbartalent from "@/components/navbar-talent";
import { CreateCVs } from "@/components/forms/CreateCvs";

export const Signupfortalent = () => {
  const [step, setStep] = useState(1);

  const renderForm = () => {
    switch (step) {
      case 1:
        return <CreateAccountForm />;
      case 2:
        return <CreateCVs />;
      default:
        return <CreateAccountForm />;
    }
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleCancel = () => {
    setStep(1);
  };

  return (
    <div className="main-div flex flex-col min-h-screen ">
      <div className="flex gap-6 px-[100px] ">
        <div className="flex flex-row py-[40px] px-[100px] font-semibold w-82 h-24 text-lg">
          Unbundl
          <div className="px-3 font-medium">
            <a href="" className="py-[45px] text-gray-500 text-sm">
              SignUp for Talent
            </a>
          </div>
        </div>
      </div>
      <Navbartalent setStep={setStep} currentStep={step} />
      {renderForm()}
      <div className="fixed bottom-0 left-0 right-0 z-50 py-5 flex justify-center gap-[233px] bg-white">
        <Button className="flex text-base bg-gray-500 " onClick={handleCancel}>
          Cancel
        </Button>
        <Button className="flex text-base" onClick={handleNext}>
          Next Step
        </Button>
      </div>
    </div>
  );
};

export default Signupfortalent;
