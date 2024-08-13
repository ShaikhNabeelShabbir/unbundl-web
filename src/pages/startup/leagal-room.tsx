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

const LegalRoom: React.FC = () => {
  return (
    <div className="flex ">
      <div className="flex-1 py-[97px]">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-[20px]">Legal Room</p>
          <Button
            variant="secondary"
            className="w-[178px] h-[42px] mr-[15px] ml-auto bg-white border"
          >
            Connect with a lawyer{" "}
          </Button>
          <Button className="w-[190px] h-[46px] mr-[30px]">
            Request to add a template{" "}
          </Button>
        </div>
        <div className="flex items-center justify-between mt-[21px]">
          <div className="flex w-[1150px] h-[46px] border rounded-[4px]">
            <input
              type="text"
              className="w-full px-4 py-2 outline-none"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="mt-[30px] mb-[20px] font-medium text-base">
          -----------NAVBAR----------
        </div>
        <div className="flex flex-col space-y-[20px]">
          <div className="flex flex-row space-x-[20px]">
            <Card className="w-[370px] h-[200px] flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-[330px] h-[19px]">
                  SAFT Contract Template{" "}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="font-normal text-sm">
                  A simple agreement for future equity (SAFT) is a financing
                  contract that may be used by a startup company to raise
                  capital in its seed financing rounds.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Download</Button>
              </CardFooter>
            </Card>
            <Card className="w-[370px] h-[200px] flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-[330px] h-[19px]">
                  SAFT Contract Template{" "}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="font-normal text-sm">
                  A simple agreement for future equity (SAFT) is a financing
                  contract that may be used by a startup company to raise
                  capital in its seed financing rounds.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Download</Button>
              </CardFooter>
            </Card>
            <Card className="w-[370px] h-[200px] flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-[330px] h-[19px]">
                  SAFT Contract Template{" "}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="font-normal text-sm">
                  A simple agreement for future equity (SAFT) is a financing
                  contract that may be used by a startup company to raise
                  capital in its seed financing rounds.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Download</Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex flex-row space-x-[20px]">
            <Card className="w-[370px] h-[200px] flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-[330px] h-[19px]">
                  SAFT Contract Template{" "}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="font-normal text-sm">
                  A simple agreement for future equity (SAFT) is a financing
                  contract that may be used by a startup company to raise
                  capital in its seed financing rounds.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Download</Button>
              </CardFooter>
            </Card>
            <Card className="w-[370px] h-[200px] flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-[330px] h-[19px]">
                  SAFT Contract Template{" "}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="font-normal text-sm">
                  A simple agreement for future equity (SAFT) is a financing
                  contract that may be used by a startup company to raise
                  capital in its seed financing rounds.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Download</Button>
              </CardFooter>
            </Card>
            <Card className="w-[370px] h-[200px] flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-[330px] h-[19px]">
                  SAFT Contract Template{" "}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="font-normal text-sm">
                  A simple agreement for future equity (SAFT) is a financing
                  contract that may be used by a startup company to raise
                  capital in its seed financing rounds.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Download</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalRoom;
