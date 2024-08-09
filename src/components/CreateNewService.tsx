import { useState } from "react";
import NavbarCreateService from "./navbarcreateservice";
import OverviewForm from "./forms/OverviewForm";
import DescriptionForm from "./forms/DescriptionForm";
import SkillsForm from "./forms/SkillsForm";
import PricingForm from "./forms/PricingForm";
import PublishForm from "./forms/PublishForm";
import { Button } from "./ui/button";

export const CreateNewService = () => {
  const [step, setStep] = useState(1);

  const renderForm = () => {
    switch (step) {
      case 1:
        return <OverviewForm />;
      case 2:
        return <SkillsForm />;
      case 3:
        return <DescriptionForm />;
      case 4:
        return <PricingForm />;
      case 5:
        return <PublishForm />;

      default:
        return <OverviewForm />;
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
      <NavbarCreateService setStep={setStep} currentStep={step} />
      {renderForm()}
      <div className="fixed bottom-0 left-0 right-0 z-50 py-5 flex justify-center gap-[233px]">
        <Button
          variant="link"
          className="flex text-base"
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

export default CreateNewService;
