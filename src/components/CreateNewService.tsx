import React, { useState } from "react";
import CloseIcon from "@/assets/icons/close-icon.svg";
import { Button } from "./ui/button";
import NavbarCreateService from "./navbarcreateservice";
import OverviewForm from "./forms/OverviewForm";
import { Description } from "@radix-ui/react-dialog";
import DescriptionForm from "./forms/DescriptionForm";
import SkillsForm from "./forms/SkillsForm";
import PricingForm from "./forms/PricingForm";
import PublishForm from "./forms/PublishForm";

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
    </div>
  );
};

export default CreateNewService;
