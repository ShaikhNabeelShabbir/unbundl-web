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
    <div className="flex flex-col m-4 sm:m-8">
      <div className="flex-1 py-4 sm:py-[97px]">
        <div className="flex items-center justify-between mb-4">
          <p className="font-semibold text-lg sm:text-5">My Network</p>
        </div>
        <div className="flex flex-col sm:flex-row w-full space-y-4 sm:space-y-0 sm:space-x-5">
          <div className="w-full border flex items-center justify-center font-medium text-base sm:text-lg h-[200px] sm:h-[300px]">
            Network visualisation
          </div>
          <div className="w-full sm:w-fit border flex items-center justify-center font-medium text-base sm:text-lg text-center">
            <div>
              <p>
                Suggest new people to the platform and increase your in-platform
                ranking
                <br />
                <br />
                <Dialog>
                  <DialogTrigger asChild>
                    <u className="cursor-pointer text-blue-600 hover:underline">
                      Invite
                    </u>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <SuggestPeople />
                  </DialogContent>
                </Dialog>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full mt-4 border bg-black/5 rounded-lg">
          <NavbarMyNetwork setStep={setStep} currentStep={step} />
          <div className="p-4">{renderForm()}</div>
        </div>
      </div>
    </div>
  );
};

export default Network;
