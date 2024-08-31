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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import VladTokenomics from "./vlad-tokenomics";

const HireServiceProviders: React.FC = () => {
  return (
    <div className="flex flex-col p-4 sm:p-8">
      <div className="py-6 sm:py-[97px]">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <p className="font-semibold mb-5 text-lg sm:text-2xl">
            Hire freelancers and agencies
          </p>
        </div>
        <div className="flex flex-col font-semibold text-md space-y-3 mb-6">
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-3">
            <Card className="h-[76px] flex items-center justify-center bg-black/25 text-black/50">
              All{" "}
            </Card>
            <Card className="h-[76px] flex items-center justify-center bg-black/25 text-black/50">
              Devs{" "}
            </Card>
            <Card className="h-[76px] flex items-center justify-center bg-black/25 text-black/50">
              Design{" "}
            </Card>
            <Card className="h-[76px] flex items-center justify-center bg-black/25 text-black/50">
              Marketing{" "}
            </Card>
            <Card className="h-[76px] flex items-center justify-center bg-black/25 text-black/50">
              Business{" "}
            </Card>
            <Card className="h-[76px] flex items-center justify-center bg-black/25 text-black/50">
              Experts{" "}
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
          Best Pics For your Company{" "}
        </div>
        <div className="flex flex-col space-y-5">
          <div className="flex flex-col space-y-5 sm:flex-row sm:space-x-5 sm:space-y-0">
            <Card className="w-full h-fit ">
              <CardHeader>
                <CardTitle className="flex justify-between font-semibold text-base mt-4">
                  Stani - Tokenomics{" "}
                  <Button className=" w-18 h-9">Business</Button>{" "}
                </CardTitle>
                <CardDescription>Agency</CardDescription>
              </CardHeader>
              <CardContent className="font-medium text-sm space-x-3">
                Figma is a collaborative web application for interface design,
                with additional offline features enabled by desktop applications
                for macOS and Windows.
              </CardContent>
              <CardFooter className="flex justify-between font-medium text-sm mt-4">
                <div>
                  <p className="text-gray-500">Top rated project</p>
                  <p className="text-lg font-semibold">Binance Tokenomics</p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      type="button"
                      className="h-[42px] w-[178px] bg-black text-white"
                    >
                      View Service
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader></DialogHeader>
                    <VladTokenomics />
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>

            {/* Repeat the Card for other research papers */}
            <Card className="w-full h-fit ">
              <CardHeader>
                <CardTitle className="flex justify-between font-semibold text-base mt-4">
                  Stani - Tokenomics{" "}
                  <Button className=" w-18 h-9">Business</Button>{" "}
                </CardTitle>
                <CardDescription>Agency</CardDescription>
              </CardHeader>
              <CardContent className="font-medium text-sm space-x-3">
                Figma is a collaborative web application for interface design,
                with additional offline features enabled by desktop applications
                for macOS and Windows.
              </CardContent>
              <CardFooter className="flex justify-between font-medium text-sm mt-4">
                <div>
                  <p className="text-gray-500">Top rated project</p>
                  <p className="text-lg font-semibold">Binance Tokenomics</p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      type="button"
                      className="h-[42px] w-[178px] bg-black text-white"
                    >
                      View Service
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader></DialogHeader>
                    <VladTokenomics />
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>

            <Card className="w-full h-fit ">
              <CardHeader>
                <CardTitle className="flex justify-between font-semibold text-base mt-4">
                  Stani - Tokenomics{" "}
                  <Button className=" w-18 h-9">Business</Button>{" "}
                </CardTitle>
                <CardDescription>Agency</CardDescription>
              </CardHeader>
              <CardContent className="font-medium text-sm space-x-3">
                Figma is a collaborative web application for interface design,
                with additional offline features enabled by desktop applications
                for macOS and Windows.
              </CardContent>
              <CardFooter className="flex justify-between font-medium text-sm mt-4">
                <div>
                  <p className="text-gray-500">Top rated project</p>
                  <p className="text-lg font-semibold">Binance Tokenomics</p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      type="button"
                      className="h-[42px] w-[178px] bg-black text-white"
                    >
                      View Service
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader></DialogHeader>
                    <VladTokenomics />
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireServiceProviders;
