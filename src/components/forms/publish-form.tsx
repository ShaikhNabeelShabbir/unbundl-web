import { Card } from "../ui/card";
import { DialogHeader, DialogTitle } from "../ui/dialog";

const PublishForm = () => {
  return (
    <div className="flex flex-col overflow-auto max-h-[80vh] h-[959px]">
      <DialogHeader>
        <DialogTitle className="font-semibold text-xl">
          Token Strategy
        </DialogTitle>
      </DialogHeader>
      <div className="flex-1 overflow-auto p-4">
        <p>Design Web Design </p>
        <div className="mt-5">
          <span>Bob Alice </span>
          <span className="mx-3">5 stars (26)</span>
          <span>4 Orders in Queue</span>
        </div>
        <div className="mt-8">
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
          <p className="mt-8">Skills</p>
          <span className="flex flex-row space-x-3">
            <Card className="p-3 font-medium text-[12px] rounded-none bg-black/25 text-wh">
              Web Design
            </Card>
            <Card className="p-3 font-medium text-[12px] rounded-none bg-black/25 text-wh">
              UI/UX Design
            </Card>
            <Card className="p-3 font-medium text-[12px] rounded-none bg-black/25 text-wh">
              Mobile design
            </Card>
            <Card className="p-3 font-medium text-[12px] rounded-none bg-black/25 text-wh">
              Figma
            </Card>
            <Card className="p-3 font-medium text-[12px] rounded-none bg-black/25 text-wh">
              Adobe XD
            </Card>
          </span>
        </div>
        <div>
          <p className="mt-8">Clients</p>
          <span className="flex flex-row space-x-3">
            <Card className="p-3 font-medium text-[12px] rounded-none bg-black/25 text-wh">
              Cardano{" "}
            </Card>
            <Card className="p-3 font-medium text-[12px] rounded-none bg-black/25 text-wh">
              Polygon{" "}
            </Card>
            <Card className="p-3 font-medium text-[12px] rounded-none bg-black/25 text-wh">
              Hedera Hashgraph{" "}
            </Card>
          </span>
        </div>
        <div className="flex flex-row space-x-[50px]">
          <div>
            <p className="mt-8">Languages</p>
            <span className="flex flex-row space-x-3">
              <Card className="p-3 font-medium text-[12px] rounded-none bg-black/25 text-wh">
                English-Native{" "}
              </Card>
            </span>
          </div>
          <div>
            <p className="mt-8">Expertise</p>
            <span className="flex flex-row space-x-3">
              <Card className="p-3 font-medium text-[12px] rounded-none bg-black/25 text-wh">
                Expert
              </Card>
            </span>
          </div>
          <div>
            <p className="mt-8">Links</p>
            <span className="flex flex-row space-x-3">
              <Card className="p-3 font-medium text-[12px] rounded-none bg-black/25 text-wh">
                Behance{" "}
              </Card>
              <Card className="p-3 font-medium text-[12px] rounded-none bg-black/25 text-wh">
                Dribble{" "}
              </Card>
            </span>
          </div>
        </div>
        <div>
          <p className="mt-8 font-semibold text-[18px]">Starting price</p>
          <span className="flex flex-row space-x-3 font-bold text-[18px]">
            $2000+
          </span>
        </div>
      </div>
    </div>
  );
};

export default PublishForm;
