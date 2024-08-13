import { Button } from "@/components/ui/button";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Events: React.FC = () => {
  return (
    <div className="flex">
      <div className="flex-1 py-[97px]">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-[20px]">Events</p>
          <Button className="w-[178px] h-[42px] mr-[30px]">Publish</Button>
        </div>
        <div className="flex items-center justify-between mt-[21px]">
          <div className="flex w-[950px] h-[46px] border border-red-900 rounded-[4px]">
            <input
              type="text"
              className="w-full px-4 py-2 outline-none"
              placeholder="Search..."
            />
          </div>
          <Button className="w-[190px] h-[46px] mr-[30px]">
            Advanced Search
          </Button>
        </div>
        <div className="mt-[30px] mb-[20px] font-medium text-base">
          Best Crypto Events in Dubai{" "}
        </div>
        <div className="flex flex-col space-y-[20px]">
          <div className="flex flex-row space-x-[20px]">
            <Card className="w-[372px] h-[142px]">
              <CardHeader>
                <CardDescription>Nov. 27 2022</CardDescription>
                <CardTitle>
                  International Crypto Expo Dubai 2023(iCryptoExpo)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Jumeirah Emirates Towers • Dubai</p>
              </CardContent>
            </Card>
            <Card className="w-[372px] h-[142px]">
              <CardHeader>
                <CardDescription>Nov. 27 2022</CardDescription>
                <CardTitle>
                  International Crypto Expo Dubai 2023(iCryptoExpo)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Jumeirah Emirates Towers • Dubai</p>
              </CardContent>
            </Card>
            <Card className="w-[372px] h-[142px]">
              <CardHeader>
                <CardDescription>Nov. 27 2022</CardDescription>
                <CardTitle>
                  International Crypto Expo Dubai 2023(iCryptoExpo)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Jumeirah Emirates Towers • Dubai</p>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-row space-x-[20px]">
            <Card className="w-[372px] h-[142px]">
              <CardHeader>
                <CardDescription>Nov. 27 2022</CardDescription>
                <CardTitle>
                  International Crypto Expo Dubai 2023(iCryptoExpo)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Jumeirah Emirates Towers • Dubai</p>
              </CardContent>
            </Card>
            <Card className="w-[372px] h-[142px]">
              <CardHeader>
                <CardDescription>Nov. 27 2022</CardDescription>
                <CardTitle>
                  International Crypto Expo Dubai 2023(iCryptoExpo)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Jumeirah Emirates Towers • Dubai</p>
              </CardContent>
            </Card>
            <Card className="w-[372px] h-[142px]">
              <CardHeader>
                <CardDescription>Nov. 27 2022</CardDescription>
                <CardTitle>
                  International Crypto Expo Dubai 2023(iCryptoExpo)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Jumeirah Emirates Towers • Dubai</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
