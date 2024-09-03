import React, { useState } from "react";
import NavbarRaiseFunds from "@/components/navbar-raise-funds";
import ReachOutToInvestors from "./reach-out-investors";
import RequsetFromInvestors from "./request-from-investors";

const RaiseFunds: React.FC = () => {
  const [step, setStep] = useState(1);

  const renderForm = () => {
    switch (step) {
      case 1:
        return <ReachOutToInvestors />;
      case 2:
        return <RequsetFromInvestors />;
      default:
        return <ReachOutToInvestors />;
    }
  };

  return (
    <div className="flex flex-col m-4 lg:flex-row lg:m-8">
      <div className="flex-1 py-8 lg:py-[97px]">
        <div className="w-full h-full border mt-5 bg-black/5">
          <NavbarRaiseFunds setStep={setStep} currentStep={step} />
          <div className="p-2">{renderForm()}</div>
        </div>
      </div>
    </div>
  );
};

export default RaiseFunds;
