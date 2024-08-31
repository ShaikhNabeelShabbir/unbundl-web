import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const VoteFornewTemplates = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);
  const [count6, setCount6] = useState(0);

  const handleIncrement = (
    setCount: React.Dispatch<React.SetStateAction<number>>,
  ) => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = (
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>,
  ) => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="p-4 sm:p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[count1, count2, count3, count4, count5, count6].map(
          (count, index) => (
            <Card key={index} className="flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-base sm:text-lg">
                    SAFT Contract Template
                  </span>
                  <div className="flex items-center space-x-1">
                    <ChevronUp
                      className="cursor-pointer"
                      onClick={() =>
                        handleIncrement(
                          [
                            setCount1,
                            setCount2,
                            setCount3,
                            setCount4,
                            setCount5,
                            setCount6,
                          ][index],
                        )
                      }
                    />
                    <span className="text-sm sm:text-base">{count}</span>
                    <ChevronDown
                      className="cursor-pointer"
                      onClick={() =>
                        handleDecrement(
                          count,
                          [
                            setCount1,
                            setCount2,
                            setCount3,
                            setCount4,
                            setCount5,
                            setCount6,
                          ][index],
                        )
                      }
                    />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm sm:text-base">
                  A simple agreement for future equity (SAFT) is a financing
                  contract that may be used by a startup company to raise
                  capital in its seed financing rounds.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Download</Button>
              </CardFooter>
            </Card>
          ),
        )}
      </div>
    </div>
  );
};

export default VoteFornewTemplates;
