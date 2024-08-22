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
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
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
    <div className="flex flex-wrap m-8">
      <div className="flex-1 py-[97px]">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-5">Research Library</p>
          <Button className="w-[178px] h-[42px] ">Publish</Button>
        </div>
        <div className="flex items-center justify-between mt-[21px]">
          <div className="flex items-center w-full h-[46px] border rounded-1">
            <Search className="ml-4 text-gray-500" />
            <input
              type="text"
              className="w-full px-4 py-2 outline-none"
              placeholder="Search..."
            />
          </div>
          <Button className="w-[190px] h-[46px] ml-5 ">Advanced Search</Button>
        </div>
        <div className="mt-8 mb-5 font-medium text-base">
          Best Pics For your company
        </div>
        <div className="flex flex-row w-full space-x-5">
          <Card className="w-full h-[260px]">
            <CardHeader>
              <CardDescription>Nov. 27 2022</CardDescription>
              <CardTitle className="flex items-center space-x-2">
                <span className="w-fit h-[19px]">
                  How is Web3 going to transform the dating industry
                </span>
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
              <Button className="p-3 w-full h-[42px] py-4 px-[55px]  bg-black/50">
                View
              </Button>
              <Button className="p-3 w-full h-[42px] py-4 px-[55px]">
                Download
              </Button>
            </CardFooter>
          </Card>

          <Card className="w-full h-[260px]">
            <CardHeader>
              <CardDescription>Nov. 27 2022</CardDescription>
              <CardTitle className="flex items-center space-x-2">
                <span className="w-fit h-[19px]">
                  How is Web3 going to transform the dating industry
                </span>
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
              <CardDescription className="pt-3">
                Published by Ramsy
              </CardDescription>
            </CardHeader>
            <CardContent className="font-medium text-sm space-x-3 w-full">
              <Button className="p-3  bg-black/25">Blockchain</Button>
              <Button className="p-3  bg-black/25">Web3</Button>
              <Button className="p-3  bg-black/25">Dating</Button>
              <Button className="p-3  bg-black/25">Marketing</Button>
            </CardContent>
            <CardFooter className="font-medium text-sm space-x-3 w-full">
              <Button className="p-3 w-full h-[42px] py-4 px-[55px]  bg-black/50">
                View
              </Button>
              <Button className="p-3 w-full h-[42px] py-4 px-[55px]">
                Download
              </Button>
            </CardFooter>
          </Card>

          <Card className="w-full h-[260px]">
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
              <Button className="p-3  bg-black/25">Blockchain</Button>
              <Button className="p-3  bg-black/25">Web3</Button>
              <Button className="p-3  bg-black/25">Dating</Button>
              <Button className="p-3  bg-black/25">Marketing</Button>
            </CardContent>
            <CardFooter className="font-medium text-sm space-x-3 ">
              <Button className="p-3 w-full h-[42px] py-4 px-[55px] bg-black/50">
                View
              </Button>
              <Button className="p-3 w-full h-[42px] py-4 px-[55px] bg-black">
                Download
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResearchLibrary;
