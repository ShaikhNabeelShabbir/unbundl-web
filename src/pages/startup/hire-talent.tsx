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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HireTalent: React.FC = () => {
  return (
    <div className="flex ml-[30px] mr-[30px]">
      <div className="flex-1 py-[97px]">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-[20px]">Hire talent for your team</p>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                type="button"
                className="h-[42px] w-[178px] text-sm mr-[30px]"
              >
                Propose Talent{" "}
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
        <div className=" flex flex-col font-semibold text-[16px] mr-[30px] mt-[21px] space-y-[10px]"></div>
        <div className="flex items-center justify-between ">
          <div className="flex items-center w-[760px] h-[46px] border rounded-[4px]">
            <Search className="ml-4 text-gray-500" />
            <input
              type="text"
              className="w-full px-4 py-2 outline-none"
              placeholder="Search..."
            />
          </div>
          <Select>
            <SelectTrigger className="w-[170px] h-[45px] bg-transparent">
              <SelectValue placeholder="Choose Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Founder">Founder</SelectItem>
              <SelectItem value="CEO">CEO</SelectItem>
              <SelectItem value="CTO">CTO</SelectItem>
              <SelectItem value="COO">COO</SelectItem>
            </SelectContent>
          </Select>
          <Button className="w-[190px] h-[46px] mr-[30px]">
            Advanced Search
          </Button>
        </div>
        <div className="mt-[30px] mb-[20px] font-medium text-base">
          Best Pics For your company
        </div>
        <div className="flex flex-col space-y-[20px]">
          <div className="flex flex-row space-x-[20px]">
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
          <div className="flex flex-row space-x-[20px]">
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

export default HireTalent;
