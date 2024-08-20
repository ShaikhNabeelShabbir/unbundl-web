import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ApplyGrant = () => {
  return (
    <div>
      <div>
        <p className="font-normal text-[12px] mb-[30px]">
          Here you can apply for a grant. You don’t need to fill out any
          information, as it’s already in your profile, just read about the
          grant, and apply
        </p>
        <p className="font-medium text-[12px] ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum eius
          omnis inventore quas repellendus facilis recusandae, saepe harum
          laboriosam quaerat iusto corrupti quod ab amet culpa molestiae quis
          vero animi.
          <br />
          <br />
          Information required:
          <ul>
            <li>Pitch deck </li>
            <li>Founders </li>
            <li>Product Information </li>
            <li>Fundraising information</li>
          </ul>
          <br />
          Please provide this information to apply for the grant:{" "}
          <ul>
            <li>Product Information </li>
            <li>Fundraising information</li>
          </ul>
        </p>
        <p>Grantwebsite.io</p>
      </div>
      <br />
      <br />
      <div className="fixed bottom-0 left-0 right-0 z-50 py-5 flex justify-center gap-[233px]">
        <br />
        <div className="fixed bottom-0 left-0 right-0 z-50 py-5 flex justify-center gap-[233px]">
          <Button className="flex text-base bg-white text-black">Cancel</Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                type="button"
                className="h-[42px] w-[178px] text-sm mr-[30px]"
              >
                Request to add software{" "}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle className="font-semibold text-xl">
                  Apply for Grant Name Grant{" "}
                </DialogTitle>
              </DialogHeader>
              <p className="font-bold text-[24px] text-center">
                Application Sent
              </p>
              <p className="text-center text-[16px] font-medium text-black/50">
                You’ll get an email notification, with the results of your
                application.
              </p>
              <p className="text-center text-[16px] font-medium">
                <u>Close </u>
              </p>
            </DialogContent>
          </Dialog>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default ApplyGrant;
