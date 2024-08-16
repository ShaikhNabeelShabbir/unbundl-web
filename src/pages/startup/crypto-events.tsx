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
    <div className="flex ml-[30px]">
      <div className="flex-1 py-[97px]">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-[20px]">Crypto Events</p>
          <Button className="w-[178px] h-[42px] mr-[30px]">Add Event</Button>
        </div>
        <div className="flex items-center justify-between mt-[21px]">
          <div className="flex items-center w-[770px] h-[46px] border rounded-[4px]">
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
        <div className="mt-[30px] mb-[20px] font-medium text-base mr-[30px]">
          Best Crypto Events in Dubai{" "}
        </div>
        <div className="flex flex-col space-y-[20px] mr-[30px]">
          <div className="flex flex-row space-x-[20px]">
            <Card className="w-[372px] h-[150px]">
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
            <Card className="w-[372px] h-[150px]">
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
            <Card className="w-[372px] h-[150px]">
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
          <div className="flex flex-row space-x-[20px] mr-[30px]">
            <Card className="w-[372px] h-[150px]">
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
            <Card className="w-[372px] h-[150px]">
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
            <Card className="w-[372px] h-[150px]">
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
          <div className="flex flex-row mr-[30px]">
            {" "}
            <Button className="ml-auto">Sponsorship Strategy</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoEvents;
