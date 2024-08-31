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
    <div className="flex flex-col p-4 sm:p-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-6">
        <p className="font-semibold text-lg sm:text-2xl">Legal Room</p>
        <div className="flex flex-col sm:flex-row sm:space-x-4 mt-4 sm:mt-0">
          <Button
            variant="secondary"
            className="w-full sm:w-[178px] h-10 bg-white border mb-2 sm:mb-0"
          >
            Connect with a lawyer
          </Button>
          <Button className="w-full sm:w-[190px] h-11">
            Request to add a template
          </Button>
        </div>
      </div>
      <div className="flex items-center mb-6 w-full border rounded-lg">
        <Search className="ml-3 text-gray-500" />
        <input
          type="text"
          className="w-full px-3 py-2 outline-none"
          placeholder="Search..."
        />
      </div>
      <div className="font-medium text-sm sm:text-base">
        <NavbarLegalRoom setStep={setStep} currentStep={step} />
        {renderForm()}
      </div>
    </div>
  );
};

export default LegalRoom;
