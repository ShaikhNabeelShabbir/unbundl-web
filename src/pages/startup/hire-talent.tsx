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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Talentprofile from "./talent-profile";

const HireTalent: React.FC = () => {
  return (
    <div className="flex flex-col p-4 sm:p-8">
      <div className="py-6 sm:py-[97px]">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <p className="font-semibold text-lg sm:text-2xl">
            Hire Talent For you Team
          </p>
          <Button className="w-full sm:w-[178px] h-11 mt-4 sm:mt-0">
            Propose Talent{" "}
          </Button>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between mt-5 space-y-4 sm:space-y-0">
          <div className="flex items-center w-full h-12 border rounded">
            <Search className="ml-4 text-gray-500" />
            <input
              type="text"
              className="w-full px-4 py-2 outline-none"
              placeholder="Search..."
            />
          </div>
          <div className="w-full sm:w-[170px] h-12 mt-4 sm:mt-0 sm:ml-3">
            <Select>
              <SelectTrigger className="w-full h-12">
                <SelectValue placeholder="Dubai" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Dubai">Dubai</SelectItem>
                <SelectItem value="Mumbai">Mumbai</SelectItem>
                <SelectItem value="USA">USA</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="w-full sm:w-[190px] h-12 mt-4 sm:mt-0 sm:ml-3">
            Advanced Search
          </Button>
        </div>
        <div className="mt-8 mb-5 font-medium text-base sm:text-lg"></div>
        <div className="flex flex-col space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <Card className="w-full h-[250px]">
              <CardHeader>
                <CardTitle>
                  UI/UX Designer{" "}
                  <span className="ml-[85px]  w-18 h-9">Part time</span>{" "}
                </CardTitle>
                <CardDescription>$10,000/month</CardDescription>
              </CardHeader>
              <CardContent className="font-medium text-sm space-x-3">
                Work experience <br />5 years 8 months
              </CardContent>
              <CardFooter className="font-medium text-sm space-x-3">
                <div className="w-[140px] h-10">
                  <p>Work places</p>
                  <div className="flex flex-row ">
                    <Card className="text-sm font-medium p-3">Google</Card>
                    <Card className="text-sm ml-3 font-medium p-3">Meta</Card>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button type="button" className="ml-[85px] px-4">
                          View profile{" "}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-fit border">
                        <DialogHeader>
                          <DialogTitle className="font-semibold text-xl">
                            Talent profile{" "}
                          </DialogTitle>
                        </DialogHeader>
                        <Talentprofile />
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardFooter>
            </Card>

            {/* Repeat the Card for other items */}
            <Card className="w-full h-[250px]">
              <CardHeader>
                <CardTitle>
                  UI/UX Designer{" "}
                  <span className="ml-[85px]  w-18 h-9">Part time</span>{" "}
                </CardTitle>
                <CardDescription>$10,000/month</CardDescription>
              </CardHeader>
              <CardContent className="font-medium text-sm space-x-3">
                Work experience <br />5 years 8 months
              </CardContent>
              <CardFooter className="font-medium text-sm space-x-3">
                <div className="w-[140px] h-10">
                  <p>Work places</p>
                  <div className="flex flex-row ">
                    <Card className="text-sm font-medium p-3">Google</Card>
                    <Card className="text-sm ml-3 font-medium p-3">Meta</Card>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button type="button" className="ml-[85px] px-4">
                          View profile{" "}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-fit border">
                        <DialogHeader>
                          <DialogTitle className="font-semibold text-xl">
                            Talent profile{" "}
                          </DialogTitle>
                        </DialogHeader>
                        <Talentprofile />
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardFooter>
            </Card>

            <Card className="w-full h-[250px]">
              <CardHeader>
                <CardTitle>
                  UI/UX Designer{" "}
                  <span className="ml-[85px]  w-18 h-9">Part time</span>{" "}
                </CardTitle>
                <CardDescription>$10,000/month</CardDescription>
              </CardHeader>
              <CardContent className="font-medium text-sm space-x-3">
                Work experience <br />5 years 8 months
              </CardContent>
              <CardFooter className="font-medium text-sm space-x-3">
                <div className="w-[140px] h-10">
                  <p>Work places</p>
                  <div className="flex flex-row ">
                    <Card className="text-sm font-medium p-3">Google</Card>
                    <Card className="text-sm ml-3 font-medium p-3">Meta</Card>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button type="button" className="ml-[85px] px-4">
                          View profile{" "}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-fit border">
                        <DialogHeader>
                          <DialogTitle className="font-semibold text-xl">
                            Talent profile{" "}
                          </DialogTitle>
                        </DialogHeader>
                        <Talentprofile />
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <Card className="w-full h-[250px]">
              <CardHeader>
                <CardTitle>
                  UI/UX Designer{" "}
                  <span className="ml-[85px]  w-18 h-9">Part time</span>{" "}
                </CardTitle>
                <CardDescription>$10,000/month</CardDescription>
              </CardHeader>
              <CardContent className="font-medium text-sm space-x-3">
                Work experience <br />5 years 8 months
              </CardContent>
              <CardFooter className="font-medium text-sm space-x-3">
                <div className="w-[140px] h-10">
                  <p>Work places</p>
                  <div className="flex flex-row ">
                    <Card className="text-sm font-medium p-3">Google</Card>
                    <Card className="text-sm ml-3 font-medium p-3">Meta</Card>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button type="button" className="ml-[85px] px-4">
                          View profile{" "}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-fit border">
                        <DialogHeader>
                          <DialogTitle className="font-semibold text-xl">
                            Talent profile{" "}
                          </DialogTitle>
                        </DialogHeader>
                        <Talentprofile />
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardFooter>
            </Card>

            <Card className="w-full h-[250px]">
              <CardHeader>
                <CardTitle>
                  UI/UX Designer{" "}
                  <span className="ml-[85px]  w-18 h-9">Part time</span>{" "}
                </CardTitle>
                <CardDescription>$10,000/month</CardDescription>
              </CardHeader>
              <CardContent className="font-medium text-sm space-x-3">
                Work experience <br />5 years 8 months
              </CardContent>
              <CardFooter className="font-medium text-sm space-x-3">
                <div className="w-[140px] h-10">
                  <p>Work places</p>
                  <div className="flex flex-row ">
                    <Card className="text-sm font-medium p-3">Google</Card>
                    <Card className="text-sm ml-3 font-medium p-3">Meta</Card>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button type="button" className="ml-[85px] px-4">
                          View profile{" "}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-fit border">
                        <DialogHeader>
                          <DialogTitle className="font-semibold text-xl">
                            Talent profile{" "}
                          </DialogTitle>
                        </DialogHeader>
                        <Talentprofile />
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardFooter>
            </Card>

            <Card className="w-full h-[250px]">
              <CardHeader>
                <CardTitle>
                  UI/UX Designer{" "}
                  <span className="ml-[85px]  w-18 h-9">Part time</span>{" "}
                </CardTitle>
                <CardDescription>$10,000/month</CardDescription>
              </CardHeader>
              <CardContent className="font-medium text-sm space-x-3">
                Work experience <br />5 years 8 months
              </CardContent>
              <CardFooter className="font-medium text-sm space-x-3">
                <div className="w-[140px] h-10">
                  <p>Work places</p>
                  <div className="flex flex-row ">
                    <Card className="text-sm font-medium p-3">Google</Card>
                    <Card className="text-sm ml-3 font-medium p-3">Meta</Card>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button type="button" className="ml-[85px] px-4">
                          View profile{" "}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-fit border">
                        <DialogHeader>
                          <DialogTitle className="font-semibold text-xl">
                            Talent profile{" "}
                          </DialogTitle>
                        </DialogHeader>
                        <Talentprofile />
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireTalent;
