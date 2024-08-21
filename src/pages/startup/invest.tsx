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
    <div className="flex flex-wrap m-8">
      <div className="flex-1 py-[97px]">
        <div className="w-full h-fit  mt-5">
          <NavbarInvest setStep={setStep} currentStep={step} />
          {renderForm()}
        </div>
      </div>
    </div>
  );
};

export default Invest;
