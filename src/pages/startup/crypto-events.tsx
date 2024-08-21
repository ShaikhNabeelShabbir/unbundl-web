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
    <div className="flex flex-wrap m-8">
      <div className="flex-1 py-[97px]">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-5">Crypto Events</p>
          <Button className="w-[178px] h-11 mr-8">Add Event</Button>
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
          <div className="w-[170px] h-12">
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
          <Button className="w-[190px] h-12 mr-8 ml-3">Advanced Search</Button>
        </div>
        <div className="mt-8 mb-5 font-medium text-base mr-8">
          Best Crypto Events in Dubai{" "}
        </div>
        <div className="flex flex-col space-y-5 mr-8">
          <div className="flex flex-row space-x-5 w-full">
            <Card className="w-full h-[150px]">
              <CardHeader>
                <CardDescription>Nov. 27 2022</CardDescription>
                <CardTitle className="font-semibold text-base">
                  International Crypto Expo Dubai 2023(iCryptoExpo)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Jumeirah Emirates Towers • Dubai</p>
              </CardContent>
            </Card>
            <Card className="w-full h-[150px]">
              <CardHeader>
                <CardDescription>Nov. 27 2022</CardDescription>
                <CardTitle className="font-semibold text-base">
                  International Crypto Expo Dubai 2023(iCryptoExpo)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Jumeirah Emirates Towers • Dubai</p>
              </CardContent>
            </Card>
            <Card className="w-full h-[150px]">
              <CardHeader>
                <CardDescription>Nov. 27 2022</CardDescription>
                <CardTitle className="font-semibold text-base">
                  International Crypto Expo Dubai 2023(iCryptoExpo)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Jumeirah Emirates Towers • Dubai</p>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-row space-x-5 mr-8 w-full">
            <Card className="w-full h-[150px]">
              <CardHeader>
                <CardDescription>Nov. 27 2022</CardDescription>
                <CardTitle className="font-semibold text-base">
                  International Crypto Expo Dubai 2023(iCryptoExpo)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Jumeirah Emirates Towers • Dubai</p>
              </CardContent>
            </Card>
            <Card className="w-full h-[150px]">
              <CardHeader>
                <CardDescription>Nov. 27 2022</CardDescription>
                <CardTitle className="font-semibold text-base">
                  International Crypto Expo Dubai 2023(iCryptoExpo)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Jumeirah Emirates Towers • Dubai</p>
              </CardContent>
            </Card>
            <Card className="w-full h-[150px]">
              <CardHeader>
                <CardDescription>Nov. 27 2022</CardDescription>
                <CardTitle className="font-semibold text-base">
                  International Crypto Expo Dubai 2023(iCryptoExpo)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Jumeirah Emirates Towers • Dubai</p>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-row">
            {" "}
            <Button className="ml-auto">Sponsorship Strategy</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoEvents;
