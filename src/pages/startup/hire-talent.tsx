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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Talentprofile from "./talent-profile";

const HireTalent: React.FC = () => {
  return (
    <div className="flex flex-wrap m-8">
      <div className="flex-1 py-[97px]">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-5">Hire talent for your team</p>

          <Button type="button" className="h-11 w-45 text-sm">
            Propose Talent{" "}
          </Button>
        </div>
        <div className=" flex flex-col font-semibold text-lg mr-8 mt-5 space-y-3"></div>
        <div className="flex items-center justify-between ">
          <div className="flex items-center w-full h-12 border rounded-1 space-x-3">
            <Search className="ml-4 text-gray-500" />
            <input
              type="text"
              className="w-full px-4 py-2 outline-none"
              placeholder="Search..."
            />
          </div>
          <Select>
            <SelectTrigger className="w-43 h-12 bg-transparent mx-8 ">
              <SelectValue placeholder="Choose Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Founder">Founder</SelectItem>
              <SelectItem value="CEO">CEO</SelectItem>
              <SelectItem value="CTO">CTO</SelectItem>
              <SelectItem value="COO">COO</SelectItem>
            </SelectContent>
          </Select>
          <Button className="w-48 h-12">Advanced Search</Button>
        </div>
        <div className="mt-8 mb-5 font-medium text-base">
          Best Pics For your company
        </div>
        <div className="flex flex-col space-y-5">
          <div className="flex flex-row space-x-5 w-ful">
            <Card className="w-full h-[250px]">
              <CardHeader>
                <CardTitle>
                  UI/UX Designer{" "}
                  <span className="ml-[85px]  w-18 h-9">Part time</span>{" "}
                </CardTitle>
                <CardDescription>$10,000/month</CardDescription>
              </CardHeader>
              <CardContent className="font-medium text-sm space-x-[10px]">
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
                        <Button type="button" className="ml-[85px] px-3">
                          View profile{" "}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-fit">
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
          <div className="flex flex-row space-x-5">
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
                <div className="w-[140px] h-[40px]">
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
                      <DialogContent className="max-w-fit">
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
                      <DialogContent className="max-w-fit ">
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
                <div className="w-[140px] h-[40px]">
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
                      <DialogContent className="max-w-fit ">
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
