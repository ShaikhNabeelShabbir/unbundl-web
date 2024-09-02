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
    <div className="p-4 sm:p-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex items-center w-full h-fit border rounded-md overflow-hidden">
          <Search className="ml-4 text-gray-500" />
          <input
            type="text"
            className="w-full px-4 py-2 outline-none"
            placeholder="Search..."
          />
        </div>
        <div className="w-full sm:w-[170px]">
          <Select>
            <SelectTrigger className="w-full h-11">
              <SelectValue placeholder="Dubai" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Dubai">Dubai</SelectItem>
              <SelectItem value="Mumbai">Mumbai</SelectItem>
              <SelectItem value="USA">USA</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full sm:w-[190px] h-12">Advanced Search</Button>
      </div>
      <div>
        <p className="font-medium text-md mb-5">Best Picks for your fund</p>
      </div>
      <div className="flex flex-col sm:flex-row w-full gap-4">
        <Card className="w-full h-fit">
          <CardHeader>
            <CardTitle>Startupname</CardTitle>
            <CardDescription>startupname.io</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-medium text-sm">
              XYZ is a fintech startup that is revolutionizing the way people in
              the MENA region access and manage their finance.
            </p>
            <div className="space-x-1 mt-2">
              <Button className="font-medium text-sm">Ethereum Chain</Button>
              <Button className="font-medium text-sm">De-fi</Button>
              <Button className="font-medium text-sm">MVP</Button>
              <Button className="font-medium text-sm">Dubai</Button>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex flex-col sm:flex-row text-sm space-y-2 sm:space-y-0 sm:space-x-2">
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
        </Card>
        <Card className="w-full h-fit">
          <CardHeader>
            <CardTitle>Startupname</CardTitle>
            <CardDescription>startupname.io</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-medium text-sm">
              XYZ is a fintech startup that is revolutionizing the way people in
              the MENA region access and manage their finance.
            </p>
            <div className="space-x-1 mt-2">
              <Button className="font-medium text-sm">Ethereum Chain</Button>
              <Button className="font-medium text-sm">De-fi</Button>
              <Button className="font-medium text-sm">MVP</Button>
              <Button className="font-medium text-sm">Dubai</Button>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex flex-col sm:flex-row text-sm space-y-2 sm:space-y-0 sm:space-x-2">
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
        </Card>
        <Card className="w-full h-fit">
          <CardHeader>
            <CardTitle>Startupname</CardTitle>
            <CardDescription>startupname.io</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-medium text-sm">
              XYZ is a fintech startup that is revolutionizing the way people in
              the MENA region access and manage their finance.
            </p>
            <div className="space-x-1 mt-2">
              <Button className="font-medium text-sm">Ethereum Chain</Button>
              <Button className="font-medium text-sm">De-fi</Button>
              <Button className="font-medium text-sm">MVP</Button>
              <Button className="font-medium text-sm">Dubai</Button>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex flex-col sm:flex-row text-sm space-y-2 sm:space-y-0 sm:space-x-2">
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
        </Card>
      </div>
    </div>
  );
};

export default FindDeals;
