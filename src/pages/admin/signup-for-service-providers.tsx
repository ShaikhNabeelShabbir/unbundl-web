import { useState } from "react";
import { Button } from "@/components/ui/button";
import NavbarServiceProvider from "@/components/navbar-service-provider";
import { CreateGigs } from "@/components/forms/create-gigs";
import { Thankyou } from "@/components/thank-you";
import { CreateAccountForm2 } from "@/components/forms/create-account-form-2";

export const Signupforserviceproviders = () => {
  const [step, setStep] = useState(1);

  const renderForm = () => {
    switch (step) {
      case 1:
        return <CreateAccountForm2 onNext={handleNext} />;
      case 2:
        return <CreateGigs />;
      case 3:
        return <Thankyou />;
      default:
        return <CreateAccountForm2 onNext={handleNext} />;
    }
  };

  const handleNext = () => {
    setStep((prevStep) => {
      if (prevStep === 3) {
        return 1; // Reset to step 1 after the last step
      }
      return prevStep + 1;
    });
  };

  const handleCancel = () => {
    setStep(1);
  };

  return (
    <div className="main-div flex flex-col min-h-screen w-full">
      {/* Header Section */}
      <div className="flex gap-6 px-4 sm:px-8 lg:px-[100px]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center py-4 sm:py-8 w-full sm:w-auto font-semibold text-lg">
          <span>Unbundl</span>
          <div className="px-0 sm:px-3 font-medium">
            <a href="#" className="text-gray-500 text-sm">
              SignUp for Service Providers
            </a>
          </div>
        </div>
      </div>

      {/* Conditionally render the navbar based on the step */}
      {step !== 3 && (
        <NavbarServiceProvider setStep={setStep} currentStep={step} />
      )}

      {/* Form Section */}
      <div className="px-4 sm:px-8 lg:px-12">{renderForm()}</div>

      {/* Conditionally render the buttons based on the step */}
      {step !== 3 && (
        <div className="fixed bottom-0 left-0 right-0 z-50 py-4 flex justify-between sm:justify-center gap-4 bg-white px-4 sm:px-8 lg:px-[233px]">
          <Button className="flex text-base bg-gray-500" onClick={handleCancel}>
            Cancel
          </Button>
          <Button className="flex text-base" type="submit" form="signupForm">
            Next Step
          </Button>
        </div>
      )}
    </div>
  );
};

export default Signupforserviceproviders;
