import { Button } from "@/components/ui/button";
import React, { useRef, useEffect, useState } from "react";

type NavbarProps = {
  setStep: (step: number) => void;
  currentStep: number;
};

const Navbar: React.FC<NavbarProps> = ({ setStep, currentStep }) => {
  const [underlineStyle, setUnderlineStyle] = useState({
    width: 0,
    left: 0,
  });

  const buttonRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  useEffect(() => {
    const updateUnderline = () => {
      const ref = buttonRefs[currentStep - 1]?.current;
      if (ref) {
        const { offsetWidth, offsetLeft } = ref;
        setUnderlineStyle({
          width: offsetWidth,
          left: offsetLeft,
        });
      }
    };

    updateUnderline();
    window.addEventListener("resize", updateUnderline);

    return () => {
      window.removeEventListener("resize", updateUnderline);
    };
  }, [currentStep]);

  return (
    <div className="overflow-x-auto overflow-y-hidden w-full">
      <div className="relative w-max">
        <div className="flex justify-center gap-0 px-4 md:px-14 scrollbar-hide">
          {[
            "Create Account",
            "General Company Information",
            "Project Information",
            "Fundraising Information",
            "Tech",
            "Market Information",
            "Team",
          ].map((label, index) => (
            <div
              key={index}
              ref={buttonRefs[index]}
              className="font-medium py-1 cursor-pointer whitespace-nowrap"
            >
              <Button
                variant="ghost"
                onClick={() => setStep(index + 1)}
                className={`text-sm md:text-md font-medium ${
                  currentStep === index + 1 ? "font-bold" : ""
                }`}
              >
                {label}
              </Button>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 px-4 md:px-[100px]">
          <hr className="border-t border-gray-300" />
          <div
            className="absolute bottom-0 h-0.5 bg-black transition-all duration-300"
            style={{
              width: underlineStyle.width,
              left: underlineStyle.left,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
