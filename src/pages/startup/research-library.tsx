import { Button } from "@/components/ui/button";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Search } from "lucide-react";

const ResearchLibrary: React.FC = () => {
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
        <div className="mt-[30px] mb-5 font-medium text-base">
          Best Pics For your company
        </div>
        <div className="flex flex-row w-full space-x-5">
          <Card className="w-full h-[260px]">
            <CardHeader>
              <CardDescription>Nov. 27 2022</CardDescription>
              <CardTitle>
                How is Web3 going to transform the dating industry
              </CardTitle>
              <CardDescription>Published by Ramsy</CardDescription>
            </CardHeader>
            <CardContent className="font-medium text-sm space-x-[10px]">
              <Button className="p-[10px] bg-black/25">Blockchain</Button>
              <Button className="p-[10px]  bg-black/25">Web3</Button>
              <Button className="p-[10px]  bg-black/25">Dating</Button>
              <Button className="p-[10px]  bg-black/25">Marketing</Button>
            </CardContent>
            <CardFooter className="font-medium text-sm space-x-[10px]">
              <Button className="p-[10px] w-[160px] h-[42px] py-[15px] px-[55px]  bg-black/50">
                View
              </Button>
              <Button className="p-[10px] w-[160px] h-[42px] py-[15px] px-[55px]">
                Download
              </Button>
            </CardFooter>
          </Card>

          <Card className="w-full h-[260px]">
            <CardHeader>
              <CardDescription>Nov. 27 2022</CardDescription>
              <CardTitle>
                How is Web3 going to transform the dating industry
              </CardTitle>
              <CardDescription>Published by Ramsy</CardDescription>
            </CardHeader>
            <CardContent className="font-medium text-sm space-x-[10px]">
              <Button className="p-[10px]  bg-black/25">Blockchain</Button>
              <Button className="p-[10px]  bg-black/25">Web3</Button>
              <Button className="p-[10px]  bg-black/25">Dating</Button>
              <Button className="p-[10px]  bg-black/25">Marketing</Button>
            </CardContent>
            <CardFooter className="font-medium text-sm space-x-[10px]">
              <Button className="p-[10px] w-[160px] h-[42px] py-[15px] px-[55px]  bg-black/50">
                View
              </Button>
              <Button className="p-[10px] w-[160px] h-[42px] py-[15px] px-[55px]">
                Download
              </Button>
            </CardFooter>
          </Card>

          <Card className="w-full h-[260px]">
            <CardHeader>
              <CardDescription>Nov. 27 2022</CardDescription>
              <CardTitle>
                How is Web3 going to transform the dating industry
              </CardTitle>
              <CardDescription>Published by Ramsy</CardDescription>
            </CardHeader>
            <CardContent className="font-medium text-sm space-x-[10px]">
              <Button className="p-[10px]  bg-black/25">Blockchain</Button>
              <Button className="p-[10px]  bg-black/25">Web3</Button>
              <Button className="p-[10px]  bg-black/25">Dating</Button>
              <Button className="p-[10px]  bg-black/25">Marketing</Button>
            </CardContent>
            <CardFooter className="font-medium text-sm space-x-[10px] ">
              <Button className="p-[10px] w-[160px] h-[42px] py-[15px] px-[55px] bg-black/50">
                View
              </Button>
              <Button className="p-[10px] w-[160px] h-[42px] py-[15px] px-[55px] bg-black">
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
