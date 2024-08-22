import { useState } from "react";
import { CreateAccountForm } from "@/components/forms/CreateAccountForm";
import { Button } from "@/components/ui/button";
import NavbarServiceProvider from "@/components/navbar-service-provider";
import { CreateGigs } from "@/components/forms/CreateGigs";
import { Thankyou } from "@/components/thank-you";
import { CreateAccountForm2 } from "@/components/forms/CreateAccountForm2";

export const Signupforserviceproviders = () => {
  const [step, setStep] = useState(1);

  const renderForm = () => {
    switch (step) {
      case 1:
        return <CreateAccountForm2 />;
      case 2:
        return <CreateGigs />;
      case 3:
        return <Thankyou />;
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
            <a href="" className="py-11 text-gray-500 text-sm">
              SignUp for Service Providers
            </a>
          </div>
        </div>
      </div>
      <NavbarServiceProvider setStep={setStep} currentStep={step} />
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

export default Signupforserviceproviders;
