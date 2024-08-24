import { useState } from "react";
import { CreateAccountForm } from "@/components/forms/CreateAccountForm";
import { GeneralCompanyInformationForm } from "@/components/forms/GeneralCompanyInformationForm";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ProjectInformationForm } from "@/components/forms/ProjectInformationForm";
import { FundraisingIformationForm } from "@/components/forms/FundraisingInformationForm";
import { MarketInformationForm } from "@/components/forms/MarketInformationForm";
import { TeamsForm } from "@/components/forms/TeamsForm";
import { Thankyou } from "@/components/thank-you";

const Signup = () => {
  const [step, setStep] = useState(1);

  const renderForm = () => {
    switch (step) {
      case 1:
        return <CreateAccountForm onNext={handleNext} />;
      case 2:
        return <GeneralCompanyInformationForm />;
      case 3:
        return <ProjectInformationForm />;
      case 4:
        return <FundraisingIformationForm />;
      case 5:
        return <MarketInformationForm />;
      case 6:
        return <TeamsForm />;
      case 7:
        return <Thankyou />;
      default:
        return <CreateAccountForm onNext={handleNext} />;
    }
  };

  const handleNext = () => {
    setStep((prevStep) => {
      if (prevStep === 7) {
        return 1; // Reset to step 1 after the last step
      }
      return prevStep + 1;
    });
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
              SignUp for founders
            </a>
          </div>
        </div>
      </div>
      {/* Conditionally render the navbar based on the step */}
      {step !== 7 && <Navbar setStep={setStep} currentStep={step} />}
      {renderForm()}
      {/* Conditionally render the buttons based on the step */}
      {step !== 7 && (
        <div className="fixed bottom-0 left-0 right-0 z-50 py-5 flex justify-center gap-[233px] bg-white">
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

export default Signup;
