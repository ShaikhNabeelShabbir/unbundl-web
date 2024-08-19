import { Card } from "../ui/card";
import { DialogHeader, DialogTitle } from "../ui/dialog";

const ReviewCV = () => {
  return (
    <div className="flex flex-col overflow-auto max-h-[80vh] h-[959px]">
      <DialogHeader>
        <DialogTitle className="font-semibold text-xl">
          Review your CV{" "}
        </DialogTitle>
      </DialogHeader>
      <div className="mt-[40px] flex flex-row">
        <span className="font-semibold text-[18px] w-[219px] ">
          <p>UI/UX Designer</p>
        </span>
        <span className=" font-bold text-[18px]">U$10,000/month</span>
      </div>
      <div className="mt-[40px]">
        <p className="font-semibold text-[18px]">
          Work Experience 5 years 8 months
        </p>
      </div>
      <div className="mt-[20px] flex flex-row font-medium text-[12px]">
        <span className="w-[160px] h-[45px]">
          <p>April 2022 — To this day </p>
          <p>9 moths</p>
        </span>
        <span className="ml-[15px]">
          <p>Meta</p>
          <p>UI/UX Designer</p>
        </span>
      </div>
      <div className="mt-[20px] flex flex-row font-medium text-[12px]">
        <span className="w-[160px] h-[45px]">
          <p>April 2022 — To this day </p>
          <p>9 moths</p>
        </span>
        <span className="ml-[15px]">
          <p>Meta</p>
          <p>UI/UX Designer</p>
        </span>
      </div>
      <div className="mt-[20px] flex flex-row font-medium text-[12px]">
        <span className="w-[160px] h-[45px]">
          <p>April 2022 — To this day </p>
          <p>9 moths</p>
        </span>
        <span className="ml-[15px]">
          <p>Meta</p>
          <p>UI/UX Designer</p>
        </span>
      </div>
      <div className="mt-[20px] flex flex-row font-medium text-[12px]">
        <span className="w-[160px] h-[45px]">
          <p>April 2022 — To this day </p>
          <p>9 moths</p>
        </span>
        <span className="ml-[15px]">
          <p>Meta</p>
          <p>UI/UX Designer</p>
        </span>
      </div>
      <div>
        <p className="font-semibold text-[12px] mt-[20px]">Key Skills</p>
        <div className=" flex flex-row space-x-[10px]">
          <Card className="p-[10px] rounded-none text-white bg-black/25">
            Web Design
          </Card>
          <Card className="p-[10px] rounded-none text-white bg-black/25">
            UI/UX Design
          </Card>
          <Card className="p-[10px] rounded-none text-white bg-black/25">
            Mobile Design
          </Card>
          <Card className="p-[10px] rounded-none text-white bg-black/25">
            Figma
          </Card>
          <Card className="p-[10px] rounded-none text-white bg-black/25">
            Adobe XD
          </Card>
        </div>
        <div className="mt-[20px]">
          <p className="font-semibold text-[18px]">About me</p>
          <p className="text-[12px] font-medium">
            As a UI/UX Designer with a focus on Web3 and Blockchain projects, I
            bring a unique perspective and skill set to the table. With a
            passion for creating intuitive and engaging designs, I strive to
            deliver user-centred experiences that not only look great but also
            effectively communicate a project's core value proposition. <br />
            <br />
            Whether it's a website or mobile app, my goal is always the same: to
            create designs that not only meet the needs of the user, but also
            drive business objectives and enhance the overall user experience.
            <br />
            <br /> In my past work, I've had the opportunity to collaborate with
            a range of clients, from startups to established companies, to
            create innovative and effective designs for a variety of Web3 and
            Blockchain projects. I'm excited to continue pushing the boundaries
            of what's possible in this rapidly evolving field, and to help shape
            the future of the Web3 and Blockchain landscape.
          </p>
        </div>
        <div className="mt-[30px]">
          <p className="font-semibold text-[18px]">Education</p>
          <div className="flex flex-row">
            <div>
              <div>2022</div>
              <div>2018</div>
            </div>
            <div className="ml-[15px]">
              <div>Princeton University</div>
              <div> Some School</div>
            </div>
          </div>
        </div>
        <p className="font-semibold text-[18px] mt-[20px]">Languages</p>
        <div className="flex flex-row">
          <div>
            <div>English</div>
          </div>
          <div className="ml-[15px]">
            <div>Native</div>
          </div>
        </div>
        <p className="font-semibold text-[18px] mt-[20px]">Portfolio</p>
        <div className="flex flex-row">
          <div>
            <div>Behance</div>
          </div>
          <div className="ml-[15px]">
            <div>Dribble</div>
          </div>
          <div className="ml-[15px]">
            <div>Instagram</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCV;
