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
    <div className="flex flex-col m-4 lg:flex-row lg:m-8">
      <div className="flex-1 py-8 lg:py-[97px]">
        <div className="w-full h-full border mt-5">
          <NavbarInvest setStep={setStep} currentStep={step} />
          <div className="p-4">{renderForm()}</div>
        </div>
      </div>
    </div>
  );
};

export default Invest;
