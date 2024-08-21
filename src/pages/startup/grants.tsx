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
    <div className="flex flex-wrap m-8">
      <div className="flex-1 py-[97px]">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-5">Grants</p>
        </div>
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center w-full h-12 border rounded-1">
            <Search className="ml-4 text-gray-500" />
            <input
              type="text"
              className="w-full px-4 py-2 outline-none"
              placeholder="Search..."
            />
          </div>
          <div className="w-[170px] h-11">
            <Select>
              <SelectTrigger className="w-[170px] h-12 ml-3">
                <SelectValue placeholder="Dubai" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Dubai">Dubai</SelectItem>
                <SelectItem value="Mumbai">Mumbai</SelectItem>
                <SelectItem value="USA">USA</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="w-[190px] h-12 ml-3">Advanced Search</Button>
        </div>
        <div className="mt-8 mb-5 font-medium text-base mr-8">
          Best Grants for your project{" "}
        </div>
        <div className="flex flex-col space-y-5">
          <div className="flex flex-row w-full space-x-5">
            <Card className="w-full h-[184px]">
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
                    <Button type="button" className="h-11 w-full text-sm px-4">
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
            <Card className="w-full h-[184px]">
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
                    <Button type="button" className="h-11 w-full text-sm px-4">
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
            <Card className="w-full h-[184px]">
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
                    <Button type="button" className="h-10 w-full text-sm px-4">
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
          <div className="flex flex-row space-x-5 w-full mr-8">
            <Card className="w-full h-[184px]">
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
                    <Button type="button" className="h-10 w-full text-sm px-4">
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
            <Card className="w-full h-[184px]">
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
                    <Button type="button" className="h-10 w-full text-sm px-4">
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
            <Card className="w-full h-[184px]">
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
                    <Button type="button" className="h-10 w-full text-sm px-4">
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
          <div className="flex flex-row mr-8"> </div>
        </div>
      </div>
    </div>
  );
};

export default Grants;
