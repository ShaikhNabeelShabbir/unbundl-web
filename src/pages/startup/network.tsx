import React, { useState } from "react";
import NavbarMyNetwork from "@/components/navbar-my-network";
import ExpandYourNetwork from "./expand-your-network";
import RequestForNewConnections from "./request-for-new-connections";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import SuggestPeople from "./suggest-people";

const Network: React.FC = () => {
  const [step, setStep] = useState(1);

  const renderForm = () => {
    switch (step) {
      case 1:
        return <ExpandYourNetwork />;
      case 2:
        return <RequestForNewConnections />;
      default:
        return <ExpandYourNetwork />;
    }
  };

  return (
    <div className="flex flex-wrap m-8">
      <div className="flex-1 py-[97px]">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-5">My Network</p>
        </div>
        <div className="flex flex-row w-full h-[300px] space-x-5">
          <div className="w-full border flex items-center justify-center font-medium text-lg">
            Network visualisation
          </div>
          <div className="w-fit border flex items-center justify-center font-medium text-lg text-center">
            <div>
              <p>
                Suggest new people to the platform and increase your in-platform
                ranking <br />
                <br />
                <Dialog>
                  <DialogTrigger asChild>
                    <u className="cursor-pointer">Invite</u>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <SuggestPeople />
                  </DialogContent>
                </Dialog>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-fit border mt-5 bg-black/5">
          <NavbarMyNetwork setStep={setStep} currentStep={step} />
          {renderForm()}
        </div>
      </div>
    </div>
  );
};

export default Network;
