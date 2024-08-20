import { Button } from "@/components/ui/button";
const AccountSettings = () => {
  return (
    <div>
      <div>
        <div className="mx-[30px] mt-[30px]  w-[1380px] h-[46px]">
          <span className="w-[63px] h-[24px] py-[15px] px-[30px]">Back</span>
          <span className="w-[63px] h-[24px] ml-[957px] py-[15px] px-[30px]">
            Help
          </span>
          <span className="w-[63px] h-[24px] ml-[13px] py-[15px] px-[30px]">
            Bob Alice
          </span>
          <span className="w-[63px] h-[24px]">
            <Button>Log Out</Button>
          </span>
        </div>
        <div className="mt-[30px] bg-black w-[1440px] h-[300px] border border-white ">
          <div className="w-[1040px] h-[63px] mx-[200px] ">
            <p className="text-white mt-[85px] ">Account Setting</p>
            <br />
            <p className="text-white ">Settings for john@viberate.io</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
