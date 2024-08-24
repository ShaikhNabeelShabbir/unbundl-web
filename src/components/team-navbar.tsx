import { SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";

const TeamNavbar = () => {
  const [activeButton, setActiveButton] = useState("Full Team");

  const handleButtonClick = (buttonName: SetStateAction<string>) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="w-full border-b flex justify-between bg-black/5">
      <div className="flex w-4/5">
        {["Full Team", "Founders", "Employees", "Advisors"].map(
          (buttonName) => (
            <div className="w-1/5" key={buttonName}>
              <Button
                className={`p-5 font-medium text-md w-full ${
                  activeButton === buttonName ? "text-black" : "text-gray-500"
                }`}
                variant="ghost"
                onClick={() => handleButtonClick(buttonName)}
              >
                {buttonName}
              </Button>
              {activeButton === buttonName && (
                <hr className="border-2 border-black" />
              )}
            </div>
          ),
        )}
      </div>
      <Button className="p-5 font-medium text-md w-1/5" variant="link">
        Add a Member
      </Button>
    </div>
  );
};

export default TeamNavbar;
