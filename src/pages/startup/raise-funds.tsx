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
    <div className="flex ml-[30px] mr-[30px]">
      <div className="flex-1 py-[97px]">
        <div className="flex items-center justify-between"></div>
        <div className="w-[1150px] h-[650px] border mt-[20px] bg-black/5">
          <NavbarRaiseFunds setStep={setStep} currentStep={step} />
          {renderForm()}
        </div>
      </div>
    </div>
  );
};

export default RaiseFunds;
