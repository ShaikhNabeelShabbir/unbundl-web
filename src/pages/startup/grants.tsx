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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ApplyGrant from "./apply-grant";

const Grants: React.FC = () => {
  return (
    <div className="flex flex-col p-4 sm:p-8">
      <div className="flex-1 py-8 sm:py-[97px]">
      <div className="flex flex-col sm:flex-row items-center justify-between">
          <p className="font-semibold text-lg sm:text-2xl">Grants</p>
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
        <div className="mt-8 mb-5 font-medium text-base sm:text-lg">
          Best Crypto Events in Dubai
        </div>
        <div className="flex flex-col space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
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
            {/* Repeat the Card for other items */}
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
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
        </div>
      </div>
    </div>
  );
};

export default Grants;
