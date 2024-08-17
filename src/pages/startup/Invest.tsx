import React, { useState } from "react";
import NavbarInvest from "@/components/navbar-invest";
import FindDeals from "./find-deals";
import ViewRequest from "./view-request";

const Invest: React.FC = () => {
  const [step, setStep] = useState(1);

  const renderForm = () => {
    switch (step) {
      case 1:
        return <FindDeals />;
      case 2:
        return <ViewRequest />;
      default:
        return <FindDeals />;
    }
  };
  return (
    <div className="flex ml-[30px] mr-[30px]">
      <div className="flex-1 py-[97px]">
        <div className="w-[1150px] h-[650px]  mt-[20px]">
          <NavbarInvest setStep={setStep} currentStep={step} />
          {renderForm()}
        </div>
      </div>
    </div>
  );
};

export default Invest;
