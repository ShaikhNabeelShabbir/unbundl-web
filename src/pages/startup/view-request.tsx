import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

const ViewRequest = () => {
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
        <div className="w-[170px] h-[45px] ml-[20px]">
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
        <Button className="w-[190px] h-[46px] mr-[30px] ml-[20px]">
          Advanced Search
        </Button>
      </div>
      <div>Hello world</div>
    </div>
  );
};

export default ViewRequest;
