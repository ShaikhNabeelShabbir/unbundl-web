import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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

const FindDeals = () => {
  return (
    <div>
      <div className="flex items-center justify-between mt-[21px]">
        <div className="flex items-center w-[770px] h-[46px] border rounded-[4px]">
          <Search className="ml-4 text-gray-500" />
          <input
            type="text"
            className="w-full px-4 py-2 outline-none"
            placeholder="Search..."
          />
        </div>
        <div className="w-[170px] h-[45px] ml-5">
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
        <Button className="w-[190px] h-[46px] mr-[30px] ml-5">
          Advanced Search
        </Button>
      </div>
      <div>
        <p className="font-medium text-[16px] mt-[30px] mb-5">
          Best Pics for your fund
        </p>
      </div>
      <div className="flex flex-row space-x-5">
        <Card className="w-[370px] h-[246px]">
          <CardHeader>
            <CardTitle>Startupname</CardTitle>
            <CardDescription>startupname.io</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-medium text-[12px]">
              XYZ is a fintech startup that is revolutionizing the way people in
              the MENA region access and manage their finance.
            </p>
            <div>
              <Button className="font-medium text-[12px]">
                Ethereum Chain
              </Button>
              <Button className="font-medium text-[12px]">De-fi</Button>
              <Button className="font-medium text-[12px]">MVP</Button>
              <Button className="font-medium text-[12px]">Dubai</Button>
            </div>
          </CardContent>
          <CardFooter>
            <div className="w-[308px] h-[35px]  flex flex-row text-[12px] space-x-[8px]">
              <div>
                <p>Round</p>
                <p>Seed</p>
              </div>
              <div>
                <p>Amount Raising</p>
                <p>$1,250,000</p>
              </div>
              <div>
                <p>Amount Raised</p>
                <p>$800,000</p>
              </div>
              <div>
                <p>Valuation</p>
                <p>$10,000,000</p>
              </div>
            </div>
          </CardFooter>
        </Card>{" "}
        <Card className="w-[370px] h-[246px]">
          <CardHeader>
            <CardTitle>Startupname</CardTitle>
            <CardDescription>startupname.io</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-medium text-[12px]">
              XYZ is a fintech startup that is revolutionizing the way people in
              the MENA region access and manage their finance.
            </p>
            <div>
              <Button className="font-medium text-[12px]">
                Ethereum Chain
              </Button>
              <Button className="font-medium text-[12px]">De-fi</Button>
              <Button className="font-medium text-[12px]">MVP</Button>
              <Button className="font-medium text-[12px]">Dubai</Button>
            </div>
          </CardContent>
          <CardFooter>
            <div className="w-[308px] h-[35px]  flex flex-row text-[12px] space-x-[8px]">
              <div>
                <p>Round</p>
                <p>Seed</p>
              </div>
              <div>
                <p>Amount Raising</p>
                <p>$1,250,000</p>
              </div>
              <div>
                <p>Amount Raised</p>
                <p>$800,000</p>
              </div>
              <div>
                <p>Valuation</p>
                <p>$10,000,000</p>
              </div>
            </div>
          </CardFooter>
        </Card>{" "}
        <Card className="w-[370px] h-[250px]">
          <CardHeader>
            <CardTitle>Startupname</CardTitle>
            <CardDescription>startupname.io</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-medium text-[12px]">
              XYZ is a fintech startup that is revolutionizing the way people in
              the MENA region access and manage their finance.
            </p>
            <div>
              <Button className="font-medium text-[12px]">
                Ethereum Chain
              </Button>
              <Button className="font-medium text-[12px]">De-fi</Button>
              <Button className="font-medium text-[12px]">MVP</Button>
              <Button className="font-medium text-[12px]">Dubai</Button>
            </div>
          </CardContent>
          <CardFooter>
            <div className="w-[308px] h-[35px]  flex flex-row text-[12px] space-x-[8px]">
              <div>
                <p>Round</p>
                <p>Seed</p>
              </div>
              <div>
                <p>Amount Raising</p>
                <p>$1,250,000</p>
              </div>
              <div>
                <p>Amount Raised</p>
                <p>$800,000</p>
              </div>
              <div>
                <p>Valuation</p>
                <p>$10,000,000</p>
              </div>
            </div>
          </CardFooter>
        </Card>{" "}
      </div>
    </div>
  );
};

export default FindDeals;
