import { useState } from "react";
import Navbarcreatecvs from "./navbar-create-cv";
import { Button } from "./ui/button";
import GeneralForm from "./forms/GeneralForm";
import ExperienceForm from "./forms/ExperienceForm";
import LinksForm from "./forms/LinksForm";
import ReviewCV from "./forms/ReviewCV";

export const CreateCV = () => {
  const [step, setStep] = useState(1);

  const renderForm = () => {
    switch (step) {
      case 1:
        return <GeneralForm />;
      case 2:
        return <ExperienceForm />;
      case 3:
        return <LinksForm />;
      case 4:
        return <ReviewCV />;
      default:
        return <GeneralForm />;
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
      <div className="fixed bottom-0 left-0 right-0 z-50 py-5 flex justify-center gap-[233px]">
        <Button
          className="flex text-base bg-white text-blacka"
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button className="flex text-base" onClick={handleNext}>
          Next Step
        </Button>
      </div>
    </div>
  );
};

export default CreateCV;
