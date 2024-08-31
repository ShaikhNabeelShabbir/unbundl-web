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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
    <div className="flex flex-col p-4 sm:p-8">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
        <p className="font-semibold text-lg sm:text-2xl">Research Library</p>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              type="button"
              className="h-11 w-full sm:w-[178px] mt-5 text-sm"
            >
              Request to add research
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="font-semibold text-xl">
                Request to add research
              </DialogTitle>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex flex-col font-semibold text-md space-y-3 mb-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Card className="h-[76px] flex items-center justify-center bg-black/25 text-black/50">
            Blockchain
          </Card>
          <Card className="h-[76px] flex items-center justify-center bg-black/25 text-black/50">
            Cryptography
          </Card>
          <Card className="h-[76px] flex items-center justify-center bg-black/25 text-black/50">
            Decentralized Finance
          </Card>
          <Card className="h-[76px] flex items-center justify-center bg-black/25 text-black/50">
            Smart Contracts
          </Card>
          <Card className="h-[76px] flex items-center justify-center bg-black/25 text-black/50">
            NFTs
          </Card>
          <Card className="h-[76px] flex items-center justify-center bg-black/25 text-black/50">
            Tokenomics
          </Card>
          <Card className="h-[76px] flex items-center justify-center bg-black/25 text-black/50">
            Security
          </Card>
          <Card className="h-[76px] flex items-center justify-center bg-black/25 text-black/50">
            Governance
          </Card>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
        <div className="flex items-center w-full h-[46px] border rounded-1">
          <Search className="ml-4 text-gray-500" />
          <input
            type="text"
            className="w-full px-4 py-2 outline-none"
            placeholder="Search..."
          />
        </div>
        <Button className="w-full sm:w-[190px] h-12 mt-3 sm:mt-0 sm:ml-3">
          Advanced Search
        </Button>
      </div>
      <div className="mb-5 font-medium text-base">
        Recommended Research Papers
      </div>
      <div className="flex flex-col space-y-5">
        <div className="flex flex-col space-y-5 sm:flex-row sm:space-x-5 sm:space-y-0">
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
              <Button className="p-3 w-full h-11 py-4 px-[55px]  bg-black/50">
                View
              </Button>
              <Button className="p-3 w-full h-11 py-4 px-[55px]">
                Download
              </Button>
            </CardFooter>
          </Card>
          {/* Repeat the Card for other research papers */}
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
              <Button className="p-3 w-full h-11 py-4 px-[55px]  bg-black/50">
                View
              </Button>
              <Button className="p-3 w-full h-11 py-4 px-[55px]">
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
              <Button className="p-3 w-full h-11 py-4 px-[55px]  bg-black/50">
                View
              </Button>
              <Button className="p-3 w-full h-11 py-4 px-[55px]">
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
