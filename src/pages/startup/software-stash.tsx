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
    <div className="flex flex-col p-4 sm:p-8">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
        <p className="font-semibold text-lg sm:text-2xl">Tool Stash</p>
        <Dialog>
          <DialogTrigger asChild>
            <Button type="button" className="h-11 w-full sm:w-[178px] text-sm">
              Request to add software
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="font-semibold text-xl">
                Request to add software
              </DialogTitle>
            </DialogHeader>
            <AddSoftwareForm />
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex flex-col font-semibold text-md space-y-3 mb-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Card className="h-[76px] flex items-center justify-center bg-black/25 text-black/50">
            Design
          </Card>
          <Card className="h-[76px] flex items-center justify-center bg-black/25 text-black/50">
            Development
          </Card>
          <Card className="h-[76px] flex items-center justify-center bg-black/25 text-black/50">
            Finance
          </Card>
          <Card className="h-[76px] flex items-center justify-center bg-black/25 text-black/50">
            Launching
          </Card>
          <Card className="h-[76px] flex items-center justify-center bg-black/25 text-black/50">
            Marketing
          </Card>
          <Card className="h-[76px] flex items-center justify-center bg-black/25 text-black/50">
            Productivity
          </Card>
          <Card className="h-[76px] flex items-center justify-center bg-black/25 text-black/50">
            Project Management
          </Card>
          <Card className="h-[76px] flex items-center justify-center bg-black/25 text-black/50">
            Team Communication
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
        Best Pics For Your Company
      </div>
      <div className="flex flex-col space-y-5">
        <div className="flex flex-col space-y-5 sm:flex-row sm:space-x-5 sm:space-y-0">
          <Card className="w-full h-full">
            <CardHeader>
              <CardTitle>Figma</CardTitle>
              <CardDescription>Published by Ramsy</CardDescription>
            </CardHeader>
            <CardContent className="font-medium text-sm">
              Figma is a collaborative web application for interface design,
              with additional offline features enabled by desktop applications
              for macOS and Windows.
            </CardContent>
            <CardFooter className="font-medium text-sm flex flex-wrap gap-2">
              <Button className="w-full sm:w-[97px] h-9 bg-black/50">
                UI/UX Design
              </Button>
              <Button className="w-full sm:w-[97px] h-9 bg-black/50">
                Web Design
              </Button>
              <Button className="w-full sm:w-[97px] h-9 bg-black/50">
                Mobile Design
              </Button>
            </CardFooter>
          </Card>
          {/* Repeat the Card for other items */}
          <Card className="w-full h-full">
            <CardHeader>
              <CardTitle>Figma</CardTitle>
              <CardDescription>Published by Ramsy</CardDescription>
            </CardHeader>
            <CardContent className="font-medium text-sm">
              Figma is a collaborative web application for interface design,
              with additional offline features enabled by desktop applications
              for macOS and Windows.
            </CardContent>
            <CardFooter className="font-medium text-sm flex flex-wrap gap-2">
              <Button className="w-full sm:w-[97px] h-9 bg-black/50">
                UI/UX Design
              </Button>
              <Button className="w-full sm:w-[97px] h-9 bg-black/50">
                Web Design
              </Button>
              <Button className="w-full sm:w-[97px] h-9 bg-black/50">
                Mobile Design
              </Button>
            </CardFooter>
          </Card>
          <Card className="w-full h-full">
            <CardHeader>
              <CardTitle>Figma</CardTitle>
              <CardDescription>Published by Ramsy</CardDescription>
            </CardHeader>
            <CardContent className="font-medium text-sm">
              Figma is a collaborative web application for interface design,
              with additional offline features enabled by desktop applications
              for macOS and Windows.
            </CardContent>
            <CardFooter className="font-medium text-sm flex flex-wrap gap-2">
              <Button className="w-full sm:w-[97px] h-9 bg-black/50">
                UI/UX Design
              </Button>
              <Button className="w-full sm:w-[97px] h-9 bg-black/50">
                Web Design
              </Button>
              <Button className="w-full sm:w-[97px] h-9 bg-black/50">
                Mobile Design
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SoftwareStash;
