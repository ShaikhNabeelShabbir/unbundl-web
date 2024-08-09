import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import CreateNewService from "../CreateNewService";

export function CreateGigs() {
  // Define the submit handler
  return (
    <div>
      <div className="main-div">
        <div className=" py-[40px] ">
          <div className="justify-center ">
            <div className="flex px-[440px] justify-center">
              <div className="text-[14px] text-gray-500">
                Add services that you provide, like “Token Design”, or “I will
                give you a 30 minute consultation on tokenomics”
                <br />
                <br />
                <p className="font-medium text-base text-black">
                  Create Services
                </p>
                <AlertDialog>
                  <AlertDialogTrigger>
                    <Button className=" h-45 w-88 text-sm px-[15px]">
                      Add your service
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <CreateNewService />
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
