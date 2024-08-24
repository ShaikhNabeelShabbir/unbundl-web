import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ImageIcon from "@/assets/icons/image.png";
import ChartIcon from "@/assets/icons/chart.png";

const Update = () => {
  return (
    <div className="rounded-md">
      <div className="grid grid-cols-[auto,1fr] items-start gap-2">
        <div className="flex justify-center items-start">
          <div className="w-[50px] h-[50px] rounded-full bg-gray-300"></div>
        </div>

        <div className="flex flex-col">
          <div className="flex justify-between">
            <Select>
              <SelectTrigger className="w-[120px] rounded-md">
                <SelectValue placeholder="Everyone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Everyone">Everyone</SelectItem>
                <SelectItem value="Connections">Connections</SelectItem>
                <SelectItem value="Only Me">Only Me</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Textarea
            className="mt-4 w-full h-[100px] rounded-md p-2"
            placeholder="What’s happening? (140 characters max)"
            maxLength={140}
          />

          <div className="flex justify-between items-center mt-4">
            <div className="flex space-x-2">
              <button className="p-2">
                <img src={ImageIcon} alt="Upload" className="w-6 h-6" />
              </button>
              <button className="p-2">
                <img src={ChartIcon} alt="Poll" className="w-6 h-6" />
              </button>
            </div>
            <Button className="text-sm" variant="link">
              <u>Post Update</u>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
