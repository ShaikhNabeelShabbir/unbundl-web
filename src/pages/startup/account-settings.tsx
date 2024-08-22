import { Button } from "@/components/ui/button";
const AccountSettings = () => {
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="mx-8 mt-8  w-full h-12">
          <span className="w-16 h-6 py-4 ml-[200px]">Back</span>
          <span className="w-16 h-6 ml-[957px] py-4 px-8">Help</span>
          <span className="w-16 h-6 ml-[13px] py-4 px-8">Bob Alice</span>
          <span className="w-16 h-6">
            <Button>Log Out</Button>
          </span>
        </div>
        <div className="mt-8 bg-black w-full h-[300px] border border-white ">
          <div className="w-full h-w-16 mx-[200px] ">
            <p className="text-white mt-[85px] ">Account Setting</p>
            <br />
            <p className="text-white ">Settings for john@viberate.io</p>
          </div>
          <div className="mt-8 w-full h-[300px] border border-white text-white ">
            hello world
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
