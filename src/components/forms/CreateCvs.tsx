import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CreateCV from "../create-cv";

export function CreateCVs() {
  return (
    <div>
      <div className="main-div">
        <div className="py-[40px]">
          <div className="justify-center">
            <div className="flex px-[440px] justify-center">
              <div className="text-base text-black/50">
                Create CVs that your potential employers can find. You’ll be
                matched with startups where you can work based on your CVs
                <br />
                <br />
                <p className="font-medium text-base text-black">Create CVs</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      type="button"
                      className="h-45 w-88 text-sm px-[15px]"
                    >
                      Create CV
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <CreateCV />
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
