import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CreateNewService from "../create-new-service";

export function CreateGigs() {
  return (
    <div>
      <div className="main-div">
        <div className="py-[40px]">
          <div className="justify-center">
            <div className="flex px-[440px] justify-center">
              <div className="text-base text-black/50">
                Add services that you provide, like “Token Design”, or “I will
                give you a 30-minute consultation on tokenomics”
                <br />
                <br />
                <p className="font-medium text-base text-black">
                  Create Services
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      type="button"
                      className="h-[45px] w-[136px] mt-[15px] text-[12px] font-normal px-5 py-[15px]"
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
      </div>
    </div>
  );
}
