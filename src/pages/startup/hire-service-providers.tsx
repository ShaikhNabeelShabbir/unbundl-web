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
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import VladTokenomics from "./vlad-tokenomics";

const HireServiceProviders: React.FC = () => {
  return (
    <div className="flex flex-wrap m-8">
      <div className="flex-1 py-[97px]">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-5">Hire freelancers and agencies</p>

          <Button type="button" className="h-11 w-45 text-sm">
            View Service{" "}
          </Button>
        </div>
        <div className=" flex flex-col font-semibold text-md  mt-[21px] space-y-[10px]">
          <div className="flex flex-row w-full space-x-3 ">
            <Card className="w-full h-[76px] rounded-[4px] flex items-center justify-center  bg-black/25 text-black/50">
              All
            </Card>
            <Card className="w-full h-[76px] rounded-[4px] flex items-center justify-center  bg-black/25 text-black/50">
              Devs
            </Card>
            <Card className="w-full h-[76px] rounded-[4px] flex items-center justify-center  bg-black/25 text-black/50">
              Design
            </Card>
            <Card className="w-full h-[76px] rounded-[4px] flex items-center justify-center  bg-black/25 text-black/50">
              Marketing
            </Card>
            <Card className="w-full h-[76px] rounded-[4px] flex items-center justify-center  bg-black/25 text-black/50">
              Business
            </Card>
            <Card className="w-full h-[76px] rounded-[4px] flex items-center justify-center  bg-black/25 text-black/50">
              Experts
            </Card>
          </div>
        </div>
        <div className="flex items-center justify-between mt-[21px]">
          <div className="flex items-center w-full h-[46px] border rounded-[4px]">
            <Search className="ml-4 text-gray-500" />
            <input
              type="text"
              className="w-full px-4 py-2 outline-none"
              placeholder="Search..."
            />
          </div>
          <div className="w-[170px] h-[45px] px-5">
            <Select>
              <SelectTrigger className="w-[170px] h-[45px]">
                <SelectValue placeholder="Dubai" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Dubai">Dubai</SelectItem>
                <SelectItem value="Mumbai">Mumbai</SelectItem>
                <SelectItem value="USA">USA</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="w-[190px] h-[46px]  ml-8 px-5">
            Advanced Search
          </Button>
        </div>
        <div className="mt-[30px] mb-5 font-medium text-base">
          Best Picks For your company
        </div>
        <div className="flex flex-col space-y-5">
          <div className="flex flex-row space-x-5 w-full">
            <Card className="w-full h-[250px]">
              <CardHeader>
                <CardTitle>
                  Stani - Tokenomics{" "}
                  <Button className="ml-[85px] w-[72px] h-[35px]">
                    Business
                  </Button>{" "}
                </CardTitle>
                <CardDescription>Agency</CardDescription>
              </CardHeader>
              <CardContent className="font-medium text-[12px] space-x-[10px]">
                Figma is a collaborative web application for interface design,
                with additional offline features enabled by desktop applications
                for macOS and Windows.
              </CardContent>
              <CardFooter className="font-medium text-sm space-x-[10px]">
                <div className="w-[140px] h-[40px]">
                  <p>Top rated project</p>
                  <p>Binance Tokenomics</p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      type="button"
                      className="h-[42px] w-[178px] text-sm mr-[30px]"
                    >
                      View Service{" "}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader></DialogHeader>
                    <VladTokenomics />
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>

            <Card className="w-full h-[250px]">
              <CardHeader>
                <CardTitle>
                  Stani - Tokenomics{" "}
                  <Button className="ml-[85px]  w-[72px] h-[35px]">
                    Business
                  </Button>{" "}
                </CardTitle>
                <CardDescription>Agency</CardDescription>
              </CardHeader>
              <CardContent className="font-medium text-[12px] space-x-[10px]">
                Figma is a collaborative web application for interface design,
                with additional offline features enabled by desktop applications
                for macOS and Windows.
              </CardContent>
              <CardFooter className="font-medium text-sm space-x-[10px]">
                <div className="w-[140px] h-[40px]">
                  <p>Top rated project</p>
                  <p>Binance Tokenomics</p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      type="button"
                      className="h-[42px] w-[178px] text-sm mr-[30px]"
                    >
                      View Service{" "}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <VladTokenomics />
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>

            <Card className="w-full h-[250px]">
              <CardHeader>
                <CardTitle>
                  Stani - Tokenomics{" "}
                  <Button className="ml-[85px]  w-[72px] h-[35px]">
                    Business
                  </Button>{" "}
                </CardTitle>
                <CardDescription>Agency</CardDescription>
              </CardHeader>
              <CardContent className="font-medium text-[12px] space-x-[10px]">
                Figma is a collaborative web application for interface design,
                with additional offline features enabled by desktop applications
                for macOS and Windows.
              </CardContent>
              <CardFooter className="font-medium text-sm space-x-[10px]">
                <div className="w-[140px] h-[40px]">
                  <p>Top rated project</p>
                  <p>Binance Tokenomics</p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      type="button"
                      className="h-[42px] w-[178px] text-sm mr-[30px]"
                    >
                      View Service{" "}
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
          <div className="flex flex-row space-x-5">
            <Card className="w-full h-[250px]">
              <CardHeader>
                <CardTitle>
                  Stani - Tokenomics{" "}
                  <Button className="ml-[85px]  w-[72px] h-[35px]">
                    Business
                  </Button>{" "}
                </CardTitle>
                <CardDescription>Agency</CardDescription>
              </CardHeader>
              <CardContent className="font-medium text-[12px] space-x-[10px]">
                Figma is a collaborative web application for interface design,
                with additional offline features enabled by desktop applications
                for macOS and Windows.
              </CardContent>
              <CardFooter className="font-medium text-sm space-x-[10px]">
                <div className="w-[140px] h-[40px]">
                  <p>Top rated project</p>
                  <p>Binance Tokenomics</p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      type="button"
                      className="h-[42px] w-[178px] text-sm mr-[30px]"
                    >
                      View Service{" "}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader></DialogHeader>
                    <VladTokenomics />
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>

            <Card className="w-full h-[250px]">
              <CardHeader>
                <CardTitle>
                  Stani - Tokenomics{" "}
                  <Button className="ml-[85px]  w-[72px] h-[35px]">
                    Business
                  </Button>{" "}
                </CardTitle>
                <CardDescription>Agency</CardDescription>
              </CardHeader>
              <CardContent className="font-medium text-[12px] space-x-[10px]">
                Figma is a collaborative web application for interface design,
                with additional offline features enabled by desktop applications
                for macOS and Windows.
              </CardContent>
              <CardFooter className="font-medium text-sm space-x-[10px]">
                <div className="w-[140px] h-[40px]">
                  <p>Top rated project</p>
                  <p>Binance Tokenomics</p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      type="button"
                      className="h-[42px] w-[178px] text-sm mr-[30px]"
                    >
                      View Service{" "}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader></DialogHeader>
                    <VladTokenomics />
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>

            <Card className="w-full h-[250px]">
              <CardHeader>
                <CardTitle>
                  Stani - Tokenomics{" "}
                  <Button className="ml-[85px]  w-[72px] h-[35px]">
                    Business
                  </Button>{" "}
                </CardTitle>
                <CardDescription>Agency</CardDescription>
              </CardHeader>
              <CardContent className="font-medium text-[12px] space-x-[10px]">
                Figma is a collaborative web application for interface design,
                with additional offline features enabled by desktop applications
                for macOS and Windows.
              </CardContent>
              <CardFooter className="font-medium text-sm space-x-[10px]">
                <div className="w-[140px] h-[40px]">
                  <p>Top rated project</p>
                  <p>Binance Tokenomics</p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      type="button"
                      className="h-[42px] w-[178px] text-sm mr-[30px]"
                    >
                      View Service{" "}
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
