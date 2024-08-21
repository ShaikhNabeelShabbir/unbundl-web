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
import AddSoftwareForm from "@/components/forms/AddSoftwareForm";

const SoftwareStash: React.FC = () => {
  return (
    <div className="flex ml-[30px] mr-[30px]">
      <div className="flex-1 py-[97px]">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-5">Tool Stash</p>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                type="button"
                className="h-[42px] w-[178px] text-sm mr-[30px]"
              >
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
        <div className=" flex flex-col font-semibold text-md mr-[30px] mt-[21px] space-y-[10px]">
          <div className="flex flex-row  space-x-[10px] ">
            <Card className="w-[280px] h-[76px] rounded-[4px] flex items-center justify-center  bg-black/25 text-black/50">
              Design
            </Card>
            <Card className="w-[280px] h-[76px] rounded-[4px] flex items-center justify-center  bg-black/25 text-black/50">
              Development
            </Card>
            <Card className="w-[280px] h-[76px] rounded-[4px] flex items-center justify-center  bg-black/25 text-black/50">
              Finance
            </Card>
            <Card className="w-[280px] h-[76px] rounded-[4px] flex items-center justify-center  bg-black/25 text-black/50">
              Launching
            </Card>
          </div>
          <div className="flex flex-row space-x-[10px]">
            <Card className="w-[280px] h-[76px] rounded-[4px] flex items-center justify-center  bg-black/25 text-black/50">
              Marketing
            </Card>
            <Card className="w-[280px] h-[76px] rounded-[4px] flex items-center justify-center  bg-black/25 text-black/50">
              Productivity
            </Card>
            <Card className="w-[280px] h-[76px] rounded-[4px] flex items-center justify-center  bg-black/25 text-black/50">
              Project Management
            </Card>
            <Card className="w-[280px] h-[76px] rounded-[4px] flex items-center justify-center  bg-black/25 text-black/50">
              Team Communication
            </Card>
          </div>
        </div>
        <div className="flex items-center justify-between mt-[21px]">
          <div className="flex items-center w-[950px] h-[46px] border rounded-[4px]">
            <Search className="ml-4 text-gray-500" />
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
        <div className="mt-[30px] mb-5 font-medium text-base">
          Best Pics For your company
        </div>
        <div className="flex flex-col space-y-5">
          <div className="flex flex-row space-x-5">
            <Card className="w-[370px] h-[220px]">
              <CardHeader>
                <CardTitle>Figma </CardTitle>
                <CardDescription>Published by Ramsy</CardDescription>
              </CardHeader>
              <CardContent className="font-medium text-[12px] space-x-[10px]">
                Figma is a collaborative web application for interface design,
                with additional offline features enabled by desktop applications
                for macOS and Windows.
              </CardContent>
              <CardFooter className="font-medium text-sm space-x-[10px]">
                <Button className=" w-[97px] h-[35px]  bg-black/50">
                  UI/UX Design
                </Button>
                <Button className=" w-[97px] h-[35px] bg-black/50">
                  Web Design
                </Button>
                <Button className=" w-[97px] h-[35px] bg-black/50">
                  Mobile Design
                </Button>
              </CardFooter>
            </Card>

            <Card className="w-[370px] h-[220px]">
              <CardHeader>
                <CardTitle>Figma </CardTitle>
                <CardDescription>Published by Ramsy</CardDescription>
              </CardHeader>
              <CardContent className="font-medium text-[12px] space-x-[10px]">
                Figma is a collaborative web application for interface design,
                with additional offline features enabled by desktop applications
                for macOS and Windows.
              </CardContent>
              <CardFooter className="font-medium text-sm space-x-[10px]">
                <Button className=" w-[97px] h-[35px]  bg-black/50">
                  UI/UX Design
                </Button>
                <Button className=" w-[97px] h-[35px] bg-black/50">
                  Web Design
                </Button>
                <Button className=" w-[97px] h-[35px] bg-black/50">
                  Mobile Design
                </Button>
              </CardFooter>
            </Card>

            <Card className="w-[370px] h-[220px]">
              <CardHeader>
                <CardTitle>Figma </CardTitle>
                <CardDescription>Published by Ramsy</CardDescription>
              </CardHeader>
              <CardContent className="font-medium text-[12px] space-x-[10px]">
                Figma is a collaborative web application for interface design,
                with additional offline features enabled by desktop applications
                for macOS and Windows.
              </CardContent>
              <CardFooter className="font-medium text-sm space-x-[10px] ">
                <Button className=" w-[97px] h-[35px] bg-black/50">
                  UI/UX Design
                </Button>
                <Button className=" w-[97px] h-[35px] bg-black/50">
                  Web Design
                </Button>
                <Button className=" w-[97px] h-[35px] bg-black/50">
                  Mobile Design
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex flex-row space-x-5">
            <Card className="w-[370px] h-[220px]">
              <CardHeader>
                <CardTitle>Figma </CardTitle>
                <CardDescription>Published by Ramsy</CardDescription>
              </CardHeader>
              <CardContent className="font-medium text-[12px] space-x-[10px]">
                Figma is a collaborative web application for interface design,
                with additional offline features enabled by desktop applications
                for macOS and Windows.
              </CardContent>
              <CardFooter className="font-medium text-sm space-x-[10px]">
                <Button className=" w-[97px] h-[35px]  bg-black/50">
                  UI/UX Design
                </Button>
                <Button className=" w-[97px] h-[35px] bg-black/50">
                  Web Design
                </Button>
                <Button className=" w-[97px] h-[35px] bg-black/50">
                  Mobile Design
                </Button>
              </CardFooter>
            </Card>

            <Card className="w-[370px] h-[220px]">
              <CardHeader>
                <CardTitle>Figma </CardTitle>
                <CardDescription>Published by Ramsy</CardDescription>
              </CardHeader>
              <CardContent className="font-medium text-[12px] space-x-[10px]">
                Figma is a collaborative web application for interface design,
                with additional offline features enabled by desktop applications
                for macOS and Windows.
              </CardContent>
              <CardFooter className="font-medium text-sm space-x-[10px]">
                <Button className=" w-[97px] h-[35px]  bg-black/50">
                  UI/UX Design
                </Button>
                <Button className=" w-[97px] h-[35px] bg-black/50">
                  Web Design
                </Button>
                <Button className=" w-[97px] h-[35px] bg-black/50">
                  Mobile Design
                </Button>
              </CardFooter>
            </Card>

            <Card className="w-[370px] h-[220px]">
              <CardHeader>
                <CardTitle>Figma </CardTitle>
                <CardDescription>Published by Ramsy</CardDescription>
              </CardHeader>
              <CardContent className="font-medium text-[12px] space-x-[10px]">
                Figma is a collaborative web application for interface design,
                with additional offline features enabled by desktop applications
                for macOS and Windows.
              </CardContent>
              <CardFooter className="font-medium text-sm space-x-[10px] ">
                <Button className=" w-[97px] h-[35px] bg-black/50">
                  UI/UX Design
                </Button>
                <Button className=" w-[97px] h-[35px] bg-black/50">
                  Web Design
                </Button>
                <Button className=" w-[97px] h-[35px] bg-black/50">
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
