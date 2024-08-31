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

const CryptoEvents: React.FC = () => {
  return (
    <div className="flex flex-col p-4 sm:p-8">
      <div className="py-6 sm:py-[97px]">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <p className="font-semibold text-lg sm:text-2xl">Crypto Events</p>
          <Button className="w-full sm:w-[178px] h-11 mt-4 sm:mt-0">
            Add Event
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
        <div className="mt-8 mb-5 font-medium text-base sm:text-lg">
          Best Crypto Events in Dubai
        </div>
        <div className="flex flex-col space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <Card className="w-full h-[150px]">
              <CardHeader>
                <CardDescription>Nov. 27 2022</CardDescription>
                <CardTitle className="font-semibold text-sm sm:text-base">
                  International Crypto Expo Dubai 2023(iCryptoExpo)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Jumeirah Emirates Towers • Dubai</p>
              </CardContent>
            </Card>
            {/* Repeat the Card for other items */}
            <Card className="w-full h-[150px]">
              <CardHeader>
                <CardDescription>Nov. 27 2022</CardDescription>
                <CardTitle className="font-semibold text-sm sm:text-base">
                  International Crypto Expo Dubai 2023(iCryptoExpo)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Jumeirah Emirates Towers • Dubai</p>
              </CardContent>
            </Card>
            <Card className="w-full h-[150px]">
              <CardHeader>
                <CardDescription>Nov. 27 2022</CardDescription>
                <CardTitle className="font-semibold text-sm sm:text-base">
                  International Crypto Expo Dubai 2023(iCryptoExpo)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Jumeirah Emirates Towers • Dubai</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <Card className="w-full h-[150px]">
              <CardHeader>
                <CardDescription>Nov. 27 2022</CardDescription>
                <CardTitle className="font-semibold text-sm sm:text-base">
                  International Crypto Expo Dubai 2023(iCryptoExpo)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Jumeirah Emirates Towers • Dubai</p>
              </CardContent>
            </Card>
            <Card className="w-full h-[150px]">
              <CardHeader>
                <CardDescription>Nov. 27 2022</CardDescription>
                <CardTitle className="font-semibold text-sm sm:text-base">
                  International Crypto Expo Dubai 2023(iCryptoExpo)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Jumeirah Emirates Towers • Dubai</p>
              </CardContent>
            </Card>
            <Card className="w-full h-[150px]">
              <CardHeader>
                <CardDescription>Nov. 27 2022</CardDescription>
                <CardTitle className="font-semibold text-sm sm:text-base">
                  International Crypto Expo Dubai 2023(iCryptoExpo)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Jumeirah Emirates Towers • Dubai </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-end mt-4">
            <Button className="w-full sm:w-auto">Sponsorship Strategy</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoEvents;
