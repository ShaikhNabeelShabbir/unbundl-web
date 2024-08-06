import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Ghost } from "lucide-react";

const signup = () => {
  return (
    <div className="main-div ">
      <div className="flex gap-6 px-14 md:px-5">
        <div className=" flex flex-row py-3 font-semibold w-82 h-24">
          Unbundl
          <div className="px-3 font-medium">
            <a href="" className="py-5 text-gray-500">
              SignUp for founders
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-row  flex-center gap-6 px-14 md:px-5 w-1240 h-hug">
        <div className="font-medium h-hug w-hug py-1">
          <button>Create Account</button>
        </div>
        <div className="font-medium h-hug w-hug py-1">
          <button>General Company Information</button>
        </div>

        <div className="font-medium h-hug w-hug py-1">
          <button>Project Information</button>
        </div>

        <div className="font-medium h-hug w-hug py-1">
          <button>Fundraising Information</button>
        </div>

        <div className="font-medium h-hug w-hug py-1">
          <button>Market Information</button>
        </div>

        <div className="font-medium h-hug w-hug py-1">
          <button>Team</button>
        </div>
      </div>
      <hr className="w-1240" />

      <div className="flex flex-row py-10 px-5">
        <div className="w-260 h-168 font-normal text-justify">
          Let us know a bit more about you, and
          <br /> please provide some social links, so we <br /> can run a small
          background check on <br /> you. <br /> It’s very important for us to
          make the
          <br /> experience on the platform exclusive,
          <br /> where every member brings value
        </div>
        <div className="px-20"></div>
      </div>
    </div>
  );
};

export default signup;
