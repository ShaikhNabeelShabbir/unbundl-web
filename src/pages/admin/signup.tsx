import { useState } from "react";
import { CreateAccountForm } from "@/components/forms/create-account-form";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ProjectInformationForm } from "@/components/forms/project-information-form";
import { MarketInformationForm } from "@/components/forms/market-information-form";
import { TeamsForm } from "@/components/forms/teams-form";
import { Thankyou } from "@/components/thank-you";
import TechForm from "@/components/forms/tech-form";
import { FundraisingIformationForm } from "@/components/forms/fundraising-information-form";
import { GeneralCompanyInformationForm } from "@/components/forms/general-company-information-form";

const Signup = () => {
  const [step, setStep] = useState(1);

  const renderForm = () => {
    switch (step) {
      case 1:
        return <CreateAccountForm onNext={handleNext} />;
      case 2:
        return <GeneralCompanyInformationForm onNext={handleNext} />;
      case 3:
        return <ProjectInformationForm onNext={handleNext} />;
      case 4:
        return <FundraisingIformationForm onNext={handleNext} />;
      case 5:
        return <TechForm onNext={handleNext} />;
      case 6:
        return <MarketInformationForm onNext={handleNext} />;
      case 7:
        return <TeamsForm />;
      case 8:
        return <Thankyou />;
      default:
        return <CreateAccountForm onNext={handleNext} />;
    }
  };

  const handleNext = () => {
    setStep((prevStep) => {
      if (prevStep === 8) {
        return 1; // Reset to step 1 after the last step
      }
      return prevStep + 1;
    });
  };

  const handleCancel = () => {
    setStep(1);
  };

  return (
    <div className="main-div flex flex-col min-h-screen w-full ">
      {/* Header Section */}
      <div className="flex gap-6 px-4 sm:px-8 lg:px-[100px] py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center py-4 sm:py-8 w-full sm:w-auto font-semibold text-lg">
          <span>Unbundl</span>
          <div className="px-0 sm:px-3 font-medium">
            <a href="#" className="text-gray-500 text-sm">
              SignUp for founders
            </a>
          </div>
        </div>
      </div>

      {/* Conditionally render the navbar based on the step */}
      {step !== 8 && <Navbar setStep={setStep} currentStep={step} />}

      {/* Form Section */}
      <div className="px-4 sm:px-8 lg:px-12">{renderForm()}</div>

      {/* Conditionally render the buttons based on the step */}
      {step !== 8 && (
        <div className="fixed bottom-0 left-0 right-0 z-50 py-4 flex justify-between sm:justify-center gap-4 bg-white px-4 sm:px-8 lg:px-[233px]">
          <Button
            className="flex text-base bg-gray-500"
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            className="flex text-base"
            type="submit"
            form="signupForm"
          >
            Next Step
          </Button>
        </div>
      )}
    </div>
  );
};

export default Signup;
