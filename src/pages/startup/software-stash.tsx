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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search } from "lucide-react";
import AddSoftwareForm from "@/components/forms/add-software-form";

const SoftwareStash: React.FC = () => {
  return (
    <div className="flex flex-wrap m-8">
      <div className="flex-1 py-[97px]">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-5">Tool Stash</p>
          <Dialog>
            <DialogTrigger asChild>
              <Button type="button" className="h-11 w-[178px] text-sm ">
                Request to add software{" "}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle className="font-semibold text-xl">
                  Request to add software{" "}
                </DialogTitle>
              </DialogHeader>
              <AddSoftwareForm />
            </DialogContent>
          </Dialog>
        </div>
        <div className=" flex flex-col font-semibold text-md  mt-5 space-y-3">
          <div className="flex flex-row w-full space-x-3 ">
            <Card className="w-full h-[76px] rounded-1 flex items-center justify-center  bg-black/25 text-black/50">
              Design
            </Card>
            <Card className="w-full h-[76px] rounded-1 flex items-center justify-center  bg-black/25 text-black/50">
              Development
            </Card>
            <Card className="w-full h-[76px] rounded-1 flex items-center justify-center  bg-black/25 text-black/50">
              Finance
            </Card>
            <Card className="w-full h-[76px] rounded-1 flex items-center justify-center  bg-black/25 text-black/50">
              Launching
            </Card>
          </div>
          <div className="flex flex-row space-x-3">
            <Card className="w-full h-[76px] rounded-1 flex items-center justify-center  bg-black/25 text-black/50">
              Marketing
            </Card>
            <Card className="w-full h-[76px] rounded-1 flex items-center justify-center  bg-black/25 text-black/50">
              Productivity
            </Card>
            <Card className="w-full h-[76px] rounded-1 flex items-center justify-center  bg-black/25 text-black/50">
              Project Management
            </Card>
            <Card className="w-full h-[76px] rounded-1 flex items-center justify-center  bg-black/25 text-black/50">
              Team Communication
            </Card>
          </div>
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
          <Button className="w-[190px] ml-3 mr-3 h-12">Advanced Search</Button>
        </div>
        <div className="mt-8 mb-5 font-medium text-base">
          Best Pics For your company
        </div>
        <div className="flex flex-col space-y-5">
          <div className="flex flex-row space-x-5 w-full">
            <Card className="w-full h-[220px]">
              <CardHeader>
                <CardTitle>Figma </CardTitle>
                <CardDescription>Published by Ramsy</CardDescription>
              </CardHeader>
              <CardContent className="font-medium text-sm space-x-3">
                Figma is a collaborative web application for interface design,
                with additional offline features enabled by desktop applications
                for macOS and Windows.
              </CardContent>
              <CardFooter className="font-medium text-sm space-x-3">
                <Button className=" w-[97px] h-9  bg-black/50">
                  UI/UX Design
                </Button>
                <Button className=" w-[97px] h-9 bg-black/50">
                  Web Design
                </Button>
                <Button className=" w-[97px] h-9 bg-black/50">
                  Mobile Design
                </Button>
              </CardFooter>
            </Card>

            <Card className="w-full h-[220px]">
              <CardHeader>
                <CardTitle>Figma </CardTitle>
                <CardDescription>Published by Ramsy</CardDescription>
              </CardHeader>
              <CardContent className="font-medium text-sm space-x-3">
                Figma is a collaborative web application for interface design,
                with additional offline features enabled by desktop applications
                for macOS and Windows.
              </CardContent>
              <CardFooter className="font-medium text-sm space-x-3">
                <Button className=" w-[97px] h-9  bg-black/50">
                  UI/UX Design
                </Button>
                <Button className=" w-[97px] h-9 bg-black/50">
                  Web Design
                </Button>
                <Button className=" w-[97px] h-9 bg-black/50">
                  Mobile Design
                </Button>
              </CardFooter>
            </Card>

            <Card className="w-full h-[220px]">
              <CardHeader>
                <CardTitle>Figma </CardTitle>
                <CardDescription>Published by Ramsy</CardDescription>
              </CardHeader>
              <CardContent className="font-medium text-sm space-x-3">
                Figma is a collaborative web application for interface design,
                with additional offline features enabled by desktop applications
                for macOS and Windows.
              </CardContent>
              <CardFooter className="font-medium text-sm space-x-3 ">
                <Button className=" w-[97px] h-9 bg-black/50">
                  UI/UX Design
                </Button>
                <Button className=" w-[97px] h-9 bg-black/50">
                  Web Design
                </Button>
                <Button className=" w-[97px] h-9 bg-black/50">
                  Mobile Design
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex flex-row space-x-5">
            <Card className="w-full h-[220px]">
              <CardHeader>
                <CardTitle>Figma </CardTitle>
                <CardDescription>Published by Ramsy</CardDescription>
              </CardHeader>
              <CardContent className="font-medium text-sm space-x-3">
                Figma is a collaborative web application for interface design,
                with additional offline features enabled by desktop applications
                for macOS and Windows.
              </CardContent>
              <CardFooter className="font-medium text-sm space-x-3">
                <Button className=" w-[97px] h-9  bg-black/50">
                  UI/UX Design
                </Button>
                <Button className=" w-[97px] h-9 bg-black/50">
                  Web Design
                </Button>
                <Button className=" w-[97px] h-9 bg-black/50">
                  Mobile Design
                </Button>
              </CardFooter>
            </Card>

            <Card className="w-full h-[220px]">
              <CardHeader>
                <CardTitle>Figma </CardTitle>
                <CardDescription>Published by Ramsy</CardDescription>
              </CardHeader>
              <CardContent className="font-medium text-sm space-x-3">
                Figma is a collaborative web application for interface design,
                with additional offline features enabled by desktop applications
                for macOS and Windows.
              </CardContent>
              <CardFooter className="font-medium text-sm space-x-3">
                <Button className=" w-[97px] h-9  bg-black/50">
                  UI/UX Design
                </Button>
                <Button className=" w-[97px] h-9 bg-black/50">
                  Web Design
                </Button>
                <Button className=" w-[97px] h-9 bg-black/50">
                  Mobile Design
                </Button>
              </CardFooter>
            </Card>

            <Card className="w-full h-[220px]">
              <CardHeader>
                <CardTitle>Figma </CardTitle>
                <CardDescription>Published by Ramsy</CardDescription>
              </CardHeader>
              <CardContent className="font-medium text-sm space-x-3">
                Figma is a collaborative web application for interface design,
                with additional offline features enabled by desktop applications
                for macOS and Windows.
              </CardContent>
              <CardFooter className="font-medium text-sm space-x-3 ">
                <Button className=" w-[97px] h-9 bg-black/50">
                  UI/UX Design
                </Button>
                <Button className=" w-[97px] h-9 bg-black/50">
                  Web Design
                </Button>
                <Button className=" w-[97px] h-9 bg-black/50">
                  Mobile Design
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareStash;
