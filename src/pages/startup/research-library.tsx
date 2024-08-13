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

const ResearchLibrary: React.FC = () => {
  return (
    <div className="flex-1 py-[87px]">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-[20px]">Research Library</p>
        <Button className="w-[178px] h-[42px]">Publish</Button>
      </div>
      <div className="flex items-center justify-between mt-[21px]">
        <div className="flex w-[950px] h-[46px] border border-red-900 rounded-[4px]">
          <input
            type="text"
            className="w-full px-4 py-2 outline-none"
            placeholder="Search..."
          />
        </div>
        <Button className="w-[190px] h-[46px]">Advanced Search</Button>
      </div>
      <div className="mt-[30px] mb-[20px] font-medium text-base">
        Best Pics For your company
      </div>
      <div className="flex flex-row space-x-[20px]">
        <Card className="w-[370px] h-[260px]">
          <CardHeader>
            <CardTitle>Card Title 1</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>

        <Card className="w-[370px] h-[260px]">
          <CardHeader>
            <CardTitle>Card Title 2</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>

        <Card className="w-[370px] h-[260px]">
          <CardHeader>
            <CardTitle>Card Title 3</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ResearchLibrary;
