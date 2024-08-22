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
    <div>
      <div className="flex flex-col space-y-5 mt-5">
        <div className="flex flex-row space-x-5">
          <Card className="w-full h-[200px] flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span className="w-fit h-[19px]">SAFT Contract Template</span>
                <div className="flex items-center space-x-1">
                  <ChevronUp
                    className="cursor-pointer"
                    onClick={() => handleIncrement(setCount1)}
                  />
                  <span>{count1}</span>
                  <ChevronDown
                    className="cursor-pointer"
                    onClick={() => handleDecrement(count1, setCount1)}
                  />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="font-normal text-sm">
                A simple agreement for future equity (SAFT) is a financing
                contract that may be used by a startup company to raise capital
                in its seed financing rounds.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Download</Button>
            </CardFooter>
          </Card>
          <Card className="w-full h-[200px] flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span className="w-fit h-[19px]">SAFT Contract Template</span>
                <div className="flex items-center space-x-1">
                  <ChevronUp
                    className="cursor-pointer"
                    onClick={() => handleIncrement(setCount2)}
                  />
                  <span>{count2}</span>
                  <ChevronDown
                    className="cursor-pointer"
                    onClick={() => handleDecrement(count2, setCount2)}
                  />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="font-normal text-sm">
                A simple agreement for future equity (SAFT) is a financing
                contract that may be used by a startup company to raise capital
                in its seed financing rounds.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Download</Button>
            </CardFooter>
          </Card>
          <Card className="w-full h-[200px] flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span className="w-fit] h-[19px]">SAFT Contract Template</span>
                <div className="flex items-center space-x-1">
                  <ChevronUp
                    className="cursor-pointer"
                    onClick={() => handleIncrement(setCount3)}
                  />
                  <span>{count3}</span>
                  <ChevronDown
                    className="cursor-pointer"
                    onClick={() => handleDecrement(count3, setCount3)}
                  />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="font-normal text-sm">
                A simple agreement for future equity (SAFT) is a financing
                contract that may be used by a startup company to raise capital
                in its seed financing rounds.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Download</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="flex flex-row space-x-5">
          <Card className="w-full h-[200px] flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span className="w-fit] h-[19px]">SAFT Contract Template</span>
                <div className="flex items-center space-x-1">
                  <ChevronUp
                    className="cursor-pointer"
                    onClick={() => handleIncrement(setCount4)}
                  />
                  <span>{count4}</span>
                  <ChevronDown
                    className="cursor-pointer"
                    onClick={() => handleDecrement(count1, setCount4)}
                  />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="font-normal text-sm">
                A simple agreement for future equity (SAFT) is a financing
                contract that may be used by a startup company to raise capital
                in its seed financing rounds.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Download</Button>
            </CardFooter>
          </Card>
          <Card className="w-full h-[200px] flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span className="w-fit h-[19px]">SAFT Contract Template</span>
                <div className="flex items-center space-x-1">
                  <ChevronUp
                    className="cursor-pointer"
                    onClick={() => handleIncrement(setCount5)}
                  />
                  <span>{count5}</span>
                  <ChevronDown
                    className="cursor-pointer"
                    onClick={() => handleDecrement(count5, setCount5)}
                  />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="font-normal text-sm">
                A simple agreement for future equity (SAFT) is a financing
                contract that may be used by a startup company to raise capital
                in its seed financing rounds.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Download</Button>
            </CardFooter>
          </Card>
          <Card className="w-full h-[200px] flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span className="w-fit h-[19px]">SAFT Contract Template</span>
                <div className="flex items-center space-x-1">
                  <ChevronUp
                    className="cursor-pointer"
                    onClick={() => handleIncrement(setCount6)}
                  />
                  <span>{count6}</span>
                  <ChevronDown
                    className="cursor-pointer"
                    onClick={() => handleDecrement(count6, setCount6)}
                  />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="font-normal text-sm">
                A simple agreement for future equity (SAFT) is a financing
                contract that may be used by a startup company to raise capital
                in its seed financing rounds.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Download</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VoteFornewTemplates;
