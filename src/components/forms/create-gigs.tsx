import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CreateNewService from "../create-new-service";

export function CreateGigs() {
  return (
    <div>
      <div className="main-div flex flex-col px-4 md:px-20 w-full items-center">
        <div className="flex flex-col md:flex-row py-10 md:px-5 flex-grow">
          <div className="justify-center w-full md:w-[560px] py-2">
            Add services that you provide, like “Token Design”, or “I will give
            you a 30-minute consultation on tokenomics”
            <br />
            <br />
            <p className="font-medium text-base text-black">Create Services</p>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  type="button"
                  className="h-11 w-[136px] mt-4 text-[12px] font-normal px-5 py-4"
                >
                  Add your service
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <CreateNewService />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}
