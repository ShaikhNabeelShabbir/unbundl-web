import { useState } from "react";
import Navbarcreatecvs from "./navbar-create-cv";
import { Button } from "./ui/button";
import GeneralForm from "./forms/general-form";
import ExperienceForm from "./forms/experience-form";
import LinksForm from "./forms/links-form";
import ReviewCV from "./forms/review-cv";

export const CreateCV = () => {
  const [step, setStep] = useState(1);

  const renderForm = () => {
    switch (step) {
      case 1:
        return <GeneralForm onNext={handleNext} />;
      case 2:
        return <ExperienceForm onNext={handleNext} />;
      case 3:
        return <LinksForm onNext={handleNext} />;
      case 4:
        return <ReviewCV />;
      default:
        return <GeneralForm onNext={handleNext} />;
    }
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleCancel = () => {
    setStep(1);
  };

  return (
    <div className="flex flex-col h-[582px]">
      {/* Conditionally render the navbar based on the step */}
      {step !== 4 && <Navbarcreatecvs setStep={setStep} currentStep={step} />}
      {renderForm()}
      <br />
      <br />
      <div className="fixed inset-x-0 bottom-0 gap-[233px] z-50 py-4 flex justify-between sm:justify-center  bg-white px-4 sm:px-8 lg:px-[233px]">
        <Button className="flex text-base bg-gray-500" onClick={handleCancel}>
          Cancel
        </Button>
        <Button className="flex text-base" type="submit" form="signupForm">
          Next Step
        </Button>
      </div>
    </div>
  );
};

export default CreateCV;
