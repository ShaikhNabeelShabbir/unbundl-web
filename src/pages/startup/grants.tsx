import { Button } from "@/components/ui/button";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
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
import { DialogHeader } from "@/components/ui/dialog";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import ApplyGrant from "./apply-grant";

const Grants: React.FC = () => {
  return (
    <div className="flex ml-[30px]">
      <div className="flex-1 py-[97px]">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-5">Grants</p>
        </div>
        <div className="flex items-center justify-between mt-[21px]">
          <div className="flex items-center w-[770px] h-[46px] border rounded-1">
            <Search className="ml-4 text-gray-500" />
            <input
              type="text"
              className="w-full px-4 py-2 outline-none"
              placeholder="Search..."
            />
          </div>
          <div className="w-[170px] h-[45px]">
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
          <Button className="w-[190px] h-[46px] mr-[30px]">
            Advanced Search
          </Button>
        </div>
        <div className="mt-[30px] mb-5 font-medium text-base mr-[30px]">
          Best Grants for your project{" "}
        </div>
        <div className="flex flex-col space-y-5 mr-[30px]">
          <div className="flex flex-row space-x-5">
            <Card className="w-[372px] h-[184px]">
              <CardHeader>
                <CardDescription>Near foundation</CardDescription>
                <CardTitle className="font-semibold text-base">
                  NEAR GRANT PROGRAMM{" "}
                </CardTitle>
                <CardDescription>$15k-$500k</CardDescription>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      type="button"
                      className="h-[42px] w-[330px] text-sm px-[15px]"
                    >
                      Apply For Grant{" "}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                      <DialogTitle className="font-semibold text-xl">
                        Apply for Grant Name Grant{" "}
                      </DialogTitle>
                    </DialogHeader>
                    <ApplyGrant />
                  </DialogContent>
                </Dialog>{" "}
              </CardContent>
            </Card>
            <Card className="w-[372px] h-[184px]">
              <CardHeader>
                <CardDescription>Near foundation</CardDescription>
                <CardTitle className="font-semibold text-base">
                  NEAR GRANT PROGRAMM{" "}
                </CardTitle>
                <CardDescription>$15k-$500k</CardDescription>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      type="button"
                      className="h-[42px] w-[330px] text-sm px-[15px]"
                    >
                      Apply For Grant{" "}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                      <DialogTitle className="font-semibold text-xl">
                        Apply for Grant Name Grant{" "}
                      </DialogTitle>
                    </DialogHeader>
                    <ApplyGrant />
                  </DialogContent>
                </Dialog>{" "}
              </CardContent>
            </Card>
            <Card className="w-[372px] h-[184px]">
              <CardHeader>
                <CardDescription>Near foundation</CardDescription>
                <CardTitle className="font-semibold text-base">
                  NEAR GRANT PROGRAMM{" "}
                </CardTitle>
                <CardDescription>$15k-$500k</CardDescription>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      type="button"
                      className="h-[42px] w-[330px] text-sm px-[15px]"
                    >
                      Apply For Grant{" "}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                      <DialogTitle className="font-semibold text-xl">
                        Apply for Grant Name Grant{" "}
                      </DialogTitle>
                    </DialogHeader>
                    <ApplyGrant />
                  </DialogContent>
                </Dialog>{" "}
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-row space-x-5 mr-[30px]">
            <Card className="w-[372px] h-[184px]">
              <CardHeader>
                <CardDescription>Near foundation</CardDescription>
                <CardTitle className="font-semibold text-base">
                  NEAR GRANT PROGRAMM{" "}
                </CardTitle>
                <CardDescription>$15k-$500k</CardDescription>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      type="button"
                      className="h-[42px] w-[330px] text-sm px-[15px]"
                    >
                      Apply For Grant{" "}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                      <DialogTitle className="font-semibold text-xl">
                        Apply for Grant Name Grant{" "}
                      </DialogTitle>
                    </DialogHeader>
                    <ApplyGrant />
                  </DialogContent>
                </Dialog>{" "}
              </CardContent>
            </Card>
            <Card className="w-[372px] h-[184px]">
              <CardHeader>
                <CardDescription>Near foundation</CardDescription>
                <CardTitle className="font-semibold text-base">
                  NEAR GRANT PROGRAMM{" "}
                </CardTitle>
                <CardDescription>$15k-$500k</CardDescription>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      type="button"
                      className="h-[42px] w-[330px] text-sm px-[15px]"
                    >
                      Apply For Grant{" "}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                      <DialogTitle className="font-semibold text-xl">
                        Apply for Grant Name Grant{" "}
                      </DialogTitle>
                    </DialogHeader>
                    <ApplyGrant />
                  </DialogContent>
                </Dialog>{" "}
              </CardContent>
            </Card>
            <Card className="w-[372px] h-[184px]">
              <CardHeader>
                <CardDescription>Near foundation</CardDescription>
                <CardTitle className="font-semibold text-base">
                  NEAR GRANT PROGRAMM{" "}
                </CardTitle>
                <CardDescription>$15k-$500k</CardDescription>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      type="button"
                      className="h-[42px] w-[330px] text-sm px-[15px]"
                    >
                      Apply For Grant{" "}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                      <DialogTitle className="font-semibold text-xl">
                        Apply for Grant Name Grant{" "}
                      </DialogTitle>
                    </DialogHeader>
                    <ApplyGrant />
                  </DialogContent>
                </Dialog>{" "}
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-row mr-[30px]"> </div>
        </div>
      </div>
    </div>
  );
};

export default Grants;
