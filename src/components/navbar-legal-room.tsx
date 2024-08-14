import { Button } from "@/components/ui/button";
import React, { useRef, useEffect, useState } from "react";

type NavbarProps = {
  setStep: (step: number) => void;
  currentStep: number;
};

const NavbarLegalRoom: React.FC<NavbarProps> = ({ setStep, currentStep }) => {
  const [underlineStyle, setUnderlineStyle] = useState({
    width: 0,
    left: 0,
  });

  const buttonRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  useEffect(() => {
    const updateUnderline = () => {
      const ref = buttonRefs[currentStep - 1].current;
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
    <div>
      <div className="relative">
        <div className="flex justify-center gap-0 px-14 md:px-5 w-full">
          {["Existing Templates", "Vote for new Templates"].map(
            (label, index) => (
              <div
                key={index}
                ref={buttonRefs[index]}
                className="font-medium py-1 cursor-pointer"
              >
                <Button
                  variant="ghost"
                  onClick={() => setStep(index + 1)}
                  className={currentStep === index + 1 ? "font-bold" : ""}
                >
                  {label}
                </Button>
              </div>
            ),
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 px-[100px]">
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

export default NavbarLegalRoom;
