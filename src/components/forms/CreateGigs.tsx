import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateNewService from "../CreateNewService";

export function CreateGigs() {
  return (
    <div>
      <div className="main-div">
        <div className="py-[40px]">
          <div className="justify-center">
            <div className="flex px-[440px] justify-center">
              <div className="text-[14px] text-gray-500">
                Add services that you provide, like “Token Design”, or “I will
                give you a 30-minute consultation on tokenomics”
                <br />
                <br />
                <p className="font-medium text-base text-black">
                  Create Services
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="h-45 w-88 text-sm px-[15px]">
                      Add your service
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                      <DialogTitle>Create New Service</DialogTitle>
                    </DialogHeader>
                    <CreateNewService />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
