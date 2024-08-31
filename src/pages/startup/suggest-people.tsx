import { DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DialogHeader } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

const SuggestPeople = () => {
  return (
    <div className="flex flex-col overflow-auto max-h-[80vh] w-full max-w-md mx-auto p-4">
      <DialogHeader>
        <DialogTitle className="font-semibold text-lg sm:text-xl">
          Suggest new people to the platform
        </DialogTitle>
        <DialogDescription className="text-sm sm:text-base">
          They will automatically be added to your network
        </DialogDescription>
      </DialogHeader>
      <div className="flex-1 overflow-auto mt-4">
        <div>
          <p className="text-sm sm:text-base mb-2">Enter their Emails</p>
          <Textarea
            className="w-full mb-4"
            placeholder="Enter emails here..."
          />
          <Button className="w-full mb-4">Invite</Button>
          <p className="text-sm sm:text-base mb-2">Send them referral link</p>
          <input
            type="text"
            className="w-full h-11 border mb-4 p-2"
            placeholder="unbundl.io/referral/sdjfsbldjcb127312w1kjsdvfs"
          />
          <Button className="w-full sm:w-auto">Copy</Button>
        </div>
      </div>
    </div>
  );
};

export default SuggestPeople;
