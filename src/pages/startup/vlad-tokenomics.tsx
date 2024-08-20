import { Card } from "@/components/ui/card";
import { DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
const VladTokenomics = () => {
  return (
    <div className="flex flex-col overflow-auto max-h-[80vh] h-[959px]">
      <DialogHeader>
        <DialogTitle className="font-semibold text-xl">
          VladTokenomics{" "}
        </DialogTitle>
      </DialogHeader>
      <div className="flex-1 overflow-auto p-4">
        <p>Design Web Design </p>
        <div className="mt-[20px]">
          <span>Bob Alice </span>
          <span className="mx-[10px]">5 stars (26)</span>
          <span>4 Orders in Queue</span>
        </div>
        <div className="mt-[30px]">
          <p className="font-semibold text-[18px]">About Me</p>
          <p className="">
            As a UI/UX Designer with a focus on Web3 and Blockchain projects, I
            bring a unique perspective and skill set to the table. With a
            passion for creating intuitive and engaging designs, I strive to
            deliver user-centred experiences that not only look great but also
            effectively communicate a project's core value proposition. <br />
            <br />
            Whether it's a website or mobile app, my goal is always the same: to
            create designs that not only meet the needs of the user, but also
            drive business objectives and enhance the overall user experience.{" "}
            <br />
            <br />
            In my past work, I've had the opportunity to collaborate with a
            range of clients, from startups to established companies, to create
            innovative and effective designs for a variety of Web3 and
            Blockchain projects. I'm excited to continue pushing the boundaries
            of what's possible in this rapidly evolving field, and to help shape
            the future of the Web3 and Blockchain landscape.
          </p>
        </div>
        <div>
          <p className="mt-[30px]">Skills</p>
          <span className="flex flex-row space-x-[10px]">
            <Card className="p-[10px] font-medium text-[12px] rounded-none bg-black/25 text-wh">
              Web Design
            </Card>
            <Card className="p-[10px] font-medium text-[12px] rounded-none bg-black/25 text-wh">
              UI/UX Design
            </Card>
            <Card className="p-[10px] font-medium text-[12px] rounded-none bg-black/25 text-wh">
              Mobile design
            </Card>
            <Card className="p-[10px] font-medium text-[12px] rounded-none bg-black/25 text-wh">
              Figma
            </Card>
            <Card className="p-[10px] font-medium text-[12px] rounded-none bg-black/25 text-wh">
              Adobe XD
            </Card>
          </span>
        </div>
        <div>
          <p className="mt-[30px]">Clients</p>
          <span className="flex flex-row space-x-[10px]">
            <Card className="p-[10px] font-medium text-[12px] rounded-none bg-black/25 text-wh">
              Cardano{" "}
            </Card>
            <Card className="p-[10px] font-medium text-[12px] rounded-none bg-black/25 text-wh">
              Polygon{" "}
            </Card>
            <Card className="p-[10px] font-medium text-[12px] rounded-none bg-black/25 text-wh">
              Hedera Hashgraph{" "}
            </Card>
          </span>
        </div>
        <div className="flex flex-row space-x-[50px]">
          <div>
            <p className="mt-[30px]">Languages</p>
            <span className="flex flex-row space-x-[10px]">
              <Card className="p-[10px] font-medium text-[12px] rounded-none bg-black/25 text-wh">
                English-Native{" "}
              </Card>
            </span>
          </div>
          <div>
            <p className="mt-[30px]">Expertise</p>
            <span className="flex flex-row space-x-[10px]">
              <Card className="p-[10px] font-medium text-[12px] rounded-none bg-black/25 text-wh">
                Expert
              </Card>
            </span>
          </div>
          <div>
            <p className="mt-[30px]">Links</p>
            <span className="flex flex-row space-x-[10px]">
              <Card className="p-[10px] font-medium text-[12px] rounded-none bg-black/25 text-wh">
                Behance{" "}
              </Card>
              <Card className="p-[10px] font-medium text-[12px] rounded-none bg-black/25 text-wh">
                Dribble{" "}
              </Card>
            </span>
          </div>
        </div>
        <div>
          <p className="mt-[30px] font-semibold text-[18px]">Starting price</p>
          <span className="flex flex-row space-x-[10px] font-bold text-[18px]">
            $2000+
          </span>
        </div>
        <br />
        <br />
        <div className="fixed bottom-0 left-0 right-0 z-50 py-5 flex justify-center  bg-white">
          <Button className="flex text-base bg-white  text-black">
            Cancel
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button type="button" className="ml-[280px] px-[15px] ">
                Accept and Interview{" "}
              </Button>
            </DialogTrigger>
            <DialogContent className="w-[600px] h-[366px] ">
              <DialogHeader>
                <DialogTitle className="font-semibold text-xl">
                  Talent profile{" "}
                </DialogTitle>
              </DialogHeader>
              <p className="font-bold text-[24px] text-center">Call Booked </p>
              <p className="text-center text-[16px] font-medium text-black/50">
                At 5 PM on February 2nd
              </p>
              <p className="text-center text-[16px] font-medium">
                <u>Close </u>
              </p>{" "}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default VladTokenomics;
