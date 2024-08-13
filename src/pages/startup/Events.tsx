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

const Events: React.FC = () => {
  return (
    <div className="flex">
      <div className="flex-1 py-[97px]">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-[20px]">Events</p>
          <Button className="w-[178px] h-[42px] mr-[30px]">Publish</Button>
        </div>
        <div className="flex items-center justify-between mt-[21px]">
          <div className="flex w-[950px] h-[46px] border border-red-900 rounded-[4px]">
            <input
              type="text"
              className="w-full px-4 py-2 outline-none"
              placeholder="Search..."
            />
          </div>
          <Button className="w-[190px] h-[46px] mr-[30px]">
            Advanced Search
          </Button>
        </div>
        <div className="mt-[30px] mb-[20px] font-medium text-base">
          Best Pics For your company
        </div>
        <div className="flex flex-row space-x-[20px]">
          <Card className="w-[370px] h-[260px]">
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

          <Card className="w-[370px] h-[260px]">
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

          <Card className="w-[370px] h-[260px]">
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

export default Events;
