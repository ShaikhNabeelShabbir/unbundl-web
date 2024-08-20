import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DialogHeader } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

const RequestIntroduction = () => {
  return (
    <div className="flex flex-col overflow-auto max-h-[80vh]">
      <DialogHeader>
        <DialogTitle className="font-semibold text-xl">
          Request introduction to Polychain Capital
        </DialogTitle>
        <DialogDescription>
          All of your mutual connections will have an option to connect you. You
          have 9 introductions left.
        </DialogDescription>
      </DialogHeader>
      <div className="flex-1 overflow-auto p-4">
        <div className="mt-[30px]">
          <p>Please explain why you would like to connect:</p>
          <Textarea className="w-[480px] min-h-[100px]" />
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-4 w-[480px]">Send Request</Button>
            </DialogTrigger>
            <DialogContent className="w-[600px] h-[366px] ">
              <DialogHeader>
                <DialogTitle className="font-semibold text-xl">
                  Suggest new people to the platfrom{" "}
                  <DialogDescription>
                    They will automatically be added to your network
                  </DialogDescription>
                </DialogTitle>
              </DialogHeader>
              <p className="text-[24px] font-bold px-[100px]">
                Suggestion Send
              </p>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default RequestIntroduction;
