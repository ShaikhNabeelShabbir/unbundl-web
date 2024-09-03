import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

const ResearchLibrary: React.FC = () => {
  const [count3, setCount3] = useState(0);

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
    <div className="flex flex-col p-4 sm:p-8">
      <div className="flex-1 py-8 sm:py-[97px]">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <p className="font-semibold text-lg sm:text-2xl">Research Library</p>
          <Button className="w-full sm:w-[178px] h-11 mt-4 sm:mt-0">
            Publish{" "}
          </Button>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between mt-5 space-y-4 sm:space-y-0">
          <div className="flex items-center w-full h-12 border rounded">
            <Search className="ml-4 text-gray-500" />
            <input
              type="text"
              className="w-full px-4 py-2 outline-none"
              placeholder="Search..."
            />
          </div>

          <Button className="w-full sm:w-[190px] h-12 mt-4 sm:mt-0 sm:ml-3">
            Advanced Search
          </Button>
        </div>
        <div className="mt-8 mb-5 font-medium text-base sm:text-lg">
          Best Crypto Events in Dubai
        </div>
        <div className="flex flex-col space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <Card className="w-full h-fit">
              <CardHeader>
                <CardDescription>Nov. 27 2022</CardDescription>
                <CardTitle className="flex items-center space-x-2">
                  <span className="w-fit h-[19px]">
                    How is Web3 going to transform the dating industry
                  </span>
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
                <CardDescription className="pt-3">
                  Published by Ramsy
                </CardDescription>
              </CardHeader>
              <CardContent className="font-medium text-sm space-x-3 w-full">
                <Button className="p-3 bg-black/25">Blockchain</Button>
                <Button className="p-3  bg-black/25">Web3</Button>
                <Button className="p-3  bg-black/25">Dating</Button>
                <Button className="p-3  bg-black/25">Marketing</Button>
              </CardContent>
              <CardFooter className="font-medium text-sm space-x-3">
                <Button className="p-3 w-full h-11 py-4 px-[55px]  bg-black/50">
                  View
                </Button>
                <Button className="p-3 w-full h-11 py-4 px-[55px]">
                  Download
                </Button>
              </CardFooter>
            </Card>
            {/* Repeat the Card for other items */}
            <Card className="w-full h-fit">
              <CardHeader>
                <CardDescription>Nov. 27 2022</CardDescription>
                <CardTitle className="flex items-center space-x-2">
                  <span className="w-fit h-[19px]">
                    How is Web3 going to transform the dating industry
                  </span>
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
                <CardDescription className="pt-3">
                  Published by Ramsy
                </CardDescription>
              </CardHeader>
              <CardContent className="font-medium text-sm space-x-3 w-full">
                <Button className="p-3 bg-black/25">Blockchain</Button>
                <Button className="p-3  bg-black/25">Web3</Button>
                <Button className="p-3  bg-black/25">Dating</Button>
                <Button className="p-3  bg-black/25">Marketing</Button>
              </CardContent>
              <CardFooter className="font-medium text-sm space-x-3">
                <Button className="p-3 w-full h-11 py-4 px-[55px]  bg-black/50">
                  View
                </Button>
                <Button className="p-3 w-full h-11 py-4 px-[55px]">
                  Download
                </Button>
              </CardFooter>
            </Card>
            <Card className="w-full h-fit">
              <CardHeader>
                <CardDescription>Nov. 27 2022</CardDescription>
                <CardTitle className="flex items-center space-x-2">
                  <span className="w-fit h-[19px]">
                    How is Web3 going to transform the dating industry
                  </span>
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
                <CardDescription className="pt-3">
                  Published by Ramsy
                </CardDescription>
              </CardHeader>
              <CardContent className="font-medium text-sm space-x-3 w-full">
                <Button className="p-3 bg-black/25">Blockchain</Button>
                <Button className="p-3  bg-black/25">Web3</Button>
                <Button className="p-3  bg-black/25">Dating</Button>
                <Button className="p-3  bg-black/25">Marketing</Button>
              </CardContent>
              <CardFooter className="font-medium text-sm space-x-3">
                <Button className="p-3 w-full h-11 py-4 px-[55px]  bg-black/50">
                  View
                </Button>
                <Button className="p-3 w-full h-11 py-4 px-[55px]">
                  Download
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5"></div>
          <div className="flex justify-end mt-4">
            <Button className="w-full sm:w-auto">Sponsorship Strategy</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchLibrary;
