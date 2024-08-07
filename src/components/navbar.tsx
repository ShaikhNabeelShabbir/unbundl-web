import { Ghost } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = ({ setStep, currentStep }) => {
  const buttonClasses = (step) =>
    step === currentStep ? "font-bold underline" : "";

  return (
    <div>
      <div className="flex justify-center flex-center gap-6 px-14 md:px-5 w-1240 h-hug">
        <div className="font-medium h-hug w-hug py-1">
          <Button
            variant={Ghost}
            onClick={() => setStep(1)}
            className={buttonClasses(1)}
          >
            Create Account
          </Button>
        </div>
        <div className="font-medium h-hug w-hug py-1">
          <Button
            variant={Ghost}
            onClick={() => setStep(2)}
            className={buttonClasses(2)}
          >
            General Company Information
          </Button>
        </div>
        <div className="font-medium h-hug w-hug py-1">
          <Button
            variant={Ghost}
            onClick={() => setStep(3)}
            className={buttonClasses(3)}
          >
            Project Information
          </Button>
        </div>
        <div className="font-medium h-hug w-hug py-1">
          <Button
            variant={Ghost}
            onClick={() => setStep(4)}
            className={buttonClasses(4)}
          >
            Fundraising Information
          </Button>
        </div>
        <div className="font-medium h-hug w-hug py-1">
          <Button
            variant={Ghost}
            onClick={() => setStep(5)}
            className={buttonClasses(5)}
          >
            Market Information
          </Button>
        </div>
        <div className="font-medium h-hug w-hug py-1">
          <Button
            variant={Ghost}
            onClick={() => setStep(6)}
            className={buttonClasses(6)}
          >
            Team
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
