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
    <div className="flex ml-[30px] mr-[30px]">
      <div className="flex-1 py-[97px]">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-5">Hire talent for your team</p>

          <Button
            type="button"
            className="h-[42px] w-[178px] text-sm mr-[30px]"
          >
            Propose Talent{" "}
          </Button>
        </div>
        <div className=" flex flex-col font-semibold text-md mr-[30px] mt-[21px] space-y-[10px]"></div>
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
        <div className="mt-[30px] mb-5 font-medium text-base">
          Best Pics For your company
        </div>
        <div className="flex flex-col space-y-5">
          <div className="flex flex-row space-x-5">
            <Card className="w-[370px] h-[250px]">
              <CardHeader>
                <CardTitle>
                  UI/UX Designer{" "}
                  <span className="ml-[85px]  w-[72px] h-[35px]">
                    Part time
                  </span>{" "}
                </CardTitle>
                <CardDescription>$10,000/month</CardDescription>
              </CardHeader>
              <CardContent className="font-medium text-[12px] space-x-[10px]">
                Work experience <br />5 years 8 months
              </CardContent>
              <CardFooter className="font-medium text-sm space-x-[10px]">
                <div className="w-[140px] h-[40px]">
                  <p>Work places</p>
                  <div className="flex flex-row ">
                    <Card className="text-[12px] font-medium p-[10px]">
                      Google
                    </Card>
                    <Card className="text-[12px] ml-[10px] font-medium p-[10px]">
                      Meta
                    </Card>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button type="button" className="ml-[85px] px-[15px]">
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
            <Card className="w-[370px] h-[250px]">
              <CardHeader>
                <CardTitle>
                  UI/UX Designer{" "}
                  <span className="ml-[85px]  w-[72px] h-[35px]">
                    Part time
                  </span>{" "}
                </CardTitle>
                <CardDescription>$10,000/month</CardDescription>
              </CardHeader>
              <CardContent className="font-medium text-[12px] space-x-[10px]">
                Work experience <br />5 years 8 months
              </CardContent>
              <CardFooter className="font-medium text-sm space-x-[10px]">
                <div className="w-[140px] h-[40px]">
                  <p>Work places</p>
                  <div className="flex flex-row ">
                    <Card className="text-[12px] font-medium p-[10px]">
                      Google
                    </Card>
                    <Card className="text-[12px] ml-[10px] font-medium p-[10px]">
                      Meta
                    </Card>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button type="button" className="ml-[85px] px-[15px]">
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
            <Card className="w-[370px] h-[250px]">
              <CardHeader>
                <CardTitle>
                  UI/UX Designer{" "}
                  <span className="ml-[85px]  w-[72px] h-[35px]">
                    Part time
                  </span>{" "}
                </CardTitle>
                <CardDescription>$10,000/month</CardDescription>
              </CardHeader>
              <CardContent className="font-medium text-[12px] space-x-[10px]">
                Work experience <br />5 years 8 months
              </CardContent>
              <CardFooter className="font-medium text-sm space-x-[10px]">
                <div className="w-[140px] h-[40px]">
                  <p>Work places</p>
                  <div className="flex flex-row ">
                    <Card className="text-[12px] font-medium p-[10px]">
                      Google
                    </Card>
                    <Card className="text-[12px] ml-[10px] font-medium p-[10px]">
                      Meta
                    </Card>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button type="button" className="ml-[85px] px-[15px]">
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
            <Card className="w-[370px] h-[250px]">
              <CardHeader>
                <CardTitle>
                  UI/UX Designer{" "}
                  <span className="ml-[85px]  w-[72px] h-[35px]">
                    Part time
                  </span>{" "}
                </CardTitle>
                <CardDescription>$10,000/month</CardDescription>
              </CardHeader>
              <CardContent className="font-medium text-[12px] space-x-[10px]">
                Work experience <br />5 years 8 months
              </CardContent>
              <CardFooter className="font-medium text-sm space-x-[10px]">
                <div className="w-[140px] h-[40px]">
                  <p>Work places</p>
                  <div className="flex flex-row ">
                    <Card className="text-[12px] font-medium p-[10px]">
                      Google
                    </Card>
                    <Card className="text-[12px] ml-[10px] font-medium p-[10px]">
                      Meta
                    </Card>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button type="button" className="ml-[85px] px-[15px]">
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
            <Card className="w-[370px] h-[250px]">
              <CardHeader>
                <CardTitle>
                  UI/UX Designer{" "}
                  <span className="ml-[85px]  w-[72px] h-[35px]">
                    Part time
                  </span>{" "}
                </CardTitle>
                <CardDescription>$10,000/month</CardDescription>
              </CardHeader>
              <CardContent className="font-medium text-[12px] space-x-[10px]">
                Work experience <br />5 years 8 months
              </CardContent>
              <CardFooter className="font-medium text-sm space-x-[10px]">
                <div className="w-[140px] h-[40px]">
                  <p>Work places</p>
                  <div className="flex flex-row ">
                    <Card className="text-[12px] font-medium p-[10px]">
                      Google
                    </Card>
                    <Card className="text-[12px] ml-[10px] font-medium p-[10px]">
                      Meta
                    </Card>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button type="button" className="ml-[85px] px-[15px]">
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
            <Card className="w-[370px] h-[250px]">
              <CardHeader>
                <CardTitle>
                  UI/UX Designer{" "}
                  <span className="ml-[85px]  w-[72px] h-[35px]">
                    Part time
                  </span>{" "}
                </CardTitle>
                <CardDescription>$10,000/month</CardDescription>
              </CardHeader>
              <CardContent className="font-medium text-[12px] space-x-[10px]">
                Work experience <br />5 years 8 months
              </CardContent>
              <CardFooter className="font-medium text-sm space-x-[10px]">
                <div className="w-[140px] h-[40px]">
                  <p>Work places</p>
                  <div className="flex flex-row ">
                    <Card className="text-[12px] font-medium p-[10px]">
                      Google
                    </Card>
                    <Card className="text-[12px] ml-[10px] font-medium p-[10px]">
                      Meta
                    </Card>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button type="button" className="ml-[85px] px-[15px]">
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
