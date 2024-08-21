import { Button } from "@/components/ui/button";
import React, { useState } from "react";

import ExistingTemplates from "./existing-templates";
import VoteFornewTemplates from "./vote-for-new-templates";
import NavbarLegalRoom from "@/components/navbar-legal-room";
import { Search } from "lucide-react";

const LegalRoom: React.FC = () => {
  const [step, setStep] = useState(1);

  const renderForm = () => {
    switch (step) {
      case 1:
        return <ExistingTemplates />;
      case 2:
        return <VoteFornewTemplates />;
      default:
        return <ExistingTemplates />;
    }
  };

  return (
    <div className="flex flex-wrap m-8">
      <div className="flex-1 py-[97px]">
        <div className="flex items-center ">
          <p className="font-semibold text-5">Legal Room</p>
          <Button
            variant="secondary"
            className="w-[178px] h-10 bg-white border ml-auto mr-8"
          >
            Connect with a lawyer{" "}
          </Button>
          <Button className="w-[190px] h-11">Request to add a template </Button>
        </div>
        <div className="flex items-center justify-between mt-[21px]">
          <div className="flex items-center w-full h-[46px] border rounded-1">
            <Search className="ml-4 text-gray-500" />
            <input
              type="text"
              className="w-full px-4 py-2 outline-none"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="mt-8 mb-5 font-medium text-base">
          <NavbarLegalRoom setStep={setStep} currentStep={step} />
          {renderForm()}
        </div>
      </div>
    </div>
  );
};

export default LegalRoom;
