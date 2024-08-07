import { Button } from "@/components/ui/button";
type NavbarProps = {
  setStep: (step: number) => void;
  currentStep: number;
};
const Navbar: React.FC<NavbarProps> = ({ setStep, currentStep }) => {
  return (
    <div>
      <div className="flex justify-center flex-center gap-6 px-14 md:px-5 w-1240 h-hug">
        <div className="font-medium h-hug w-hug py-1">
          <Button
            variant={currentStep === 1 ? "ghost" : "ghost"}
            onClick={() => setStep(1)}
            className={currentStep === 1 ? "font-bold underline" : ""}
          >
            Create Account
          </Button>
        </div>
        <div className="font-medium h-hug w-hug py-1">
          <Button
            variant={currentStep === 2 ? "ghost" : "ghost"}
            onClick={() => setStep(2)}
            className={currentStep === 2 ? "font-bold underline" : ""}
          >
            General Company Information
          </Button>
        </div>
        <div className="font-medium h-hug w-hug py-1">
          <Button
            variant={currentStep === 3 ? "ghost" : "ghost"}
            onClick={() => setStep(3)}
            className={currentStep === 3 ? "font-bold underline" : ""}
          >
            Project Information
          </Button>
        </div>
        <div className="font-medium h-hug w-hug py-1">
          <Button
            variant={currentStep === 4 ? "ghost" : "ghost"}
            onClick={() => setStep(4)}
            className={currentStep === 4 ? "font-bold underline" : ""}
          >
            Fundraising Information
          </Button>
        </div>
        <div className="font-medium h-hug w-hug py-1">
          <Button
            variant={currentStep === 5 ? "ghost" : "ghost"}
            onClick={() => setStep(5)}
            className={currentStep === 5 ? "font-bold underline" : ""}
          >
            Market Information
          </Button>
        </div>
        <div className="font-medium h-hug w-hug py-1">
          <Button
            variant={currentStep === 6 ? "ghost" : "ghost"}
            onClick={() => setStep(6)}
            className={currentStep === 6 ? "font-bold underline" : ""}
          >
            Team
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
