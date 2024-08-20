import { DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { DialogHeader } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
const SuggestPeople = () => {
  return (
    <div className="flex flex-col overflow-auto max-h-[80vh] w-[500px] ">
      <DialogHeader>
        <DialogTitle className="font-semibold text-xl">
          Suggest new people to the platfrom{" "}
        </DialogTitle>
        <DialogDescription>
          They will automatically be added to your network{" "}
        </DialogDescription>
      </DialogHeader>
      <div className="flex-1 overflow-auto p-4">
        <div className="mt-[30px]">
          <p>Enter their Emails</p>
          <Textarea className="w-[480px]"></Textarea>
          <br />
          <Button className="w-[480px]">Invite</Button>
          <br />
          <br />
          <p>Send them referral link</p>
          <input
            type="text"
            className="w-[355px] h-[45px] border"
            placeholder="unbundl.io/referral/sdjfsbldjcb127312w1kjsdvfs"
          />
          <Button className="ml-[10px] w-[115px]"> Copy</Button>
        </div>
      </div>
    </div>
  );
};

export default SuggestPeople;
