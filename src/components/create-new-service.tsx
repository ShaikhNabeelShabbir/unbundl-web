import { useState } from "react";
import NavbarCreateService from "./navbar-create-service";
import OverviewForm from "./forms/overview-form";
import DescriptionForm from "./forms/description-form";
import SkillsForm from "./forms/skills-form";
import PricingForm from "./forms/pricing-form";
import PublishForm from "./forms/publish-form";
import { Button } from "./ui/button";

export const CreateNewService = () => {
  const [step, setStep] = useState(1);

  const renderForm = () => {
    switch (step) {
      case 1:
        return <OverviewForm onNext={handleNext} />;
      case 2:
        return <SkillsForm />;
      case 3:
        return <DescriptionForm onNext={handleNext} />;
      case 4:
        return <PricingForm onNext={handleNext} />;
      case 5:
        return <PublishForm />;
      default:
        return <OverviewForm onNext={handleNext} />;
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
      {step !== 5 && (
        <NavbarCreateService setStep={setStep} currentStep={step} />
      )}
      {renderForm()}
      <br />
      <div className="fixed bottom-0 left-0 right-0 z-50 py-5 flex justify-center gap-[375px]">
        <Button
          className="flex text-base bg-white text-blacka"
          onClick={handleCancel}
          variant="link"
        >
          Cancel
        </Button>
        <Button className="flex text-base" type="submit" form="signupForm">
          Next Step
        </Button>
      </div>
    </div>
  );
};

export default CreateNewService;
