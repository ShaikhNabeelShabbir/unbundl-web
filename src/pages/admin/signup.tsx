import { useState } from "react";
import { CreateAccountForm } from "@/components/forms/CreateAccountForm";
import { GeneralCompanyInformationForm } from "@/components/forms/GeneralCompanyInformationForm";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ProjectInformationForm } from "@/components/forms/ProjectInformationForm";
import { FundraisingIformationForm } from "@/components/forms/FundraisingInformationForm";
import { MarketInformationForm } from "@/components/forms/MarketInformationForm";
import { TeamsForm } from "@/components/forms/TeamsForm"; // Assuming you have a TeamForm component

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
      case 5:
        return <MarketInformationForm />;
      case 6:
        return <TeamsForm />;
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
    <div className="main-div flex flex-col min-h-screen px-20">
      <div className="flex gap-6 px-14">
        <div className="flex flex-row py-3 font-semibold w-82 h-24 text-lg">
          Unbundl
          <div className="px-3 font-medium">
            <a href="" className="py-5 text-gray-500 text-sm">
              SignUp for founders
            </a>
          </div>
        </div>
      </div>
      <Navbar setStep={setStep} currentStep={step} />
      {renderForm()}
      <div className="fixed bottom-0 left-0 right-0 z-50 py-5 flex justify-center gap-20 bg-white">
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

export default Signup;
