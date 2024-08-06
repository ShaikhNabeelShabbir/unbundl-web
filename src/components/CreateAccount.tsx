import React from "react";
import { Button } from "./ui/button";
import { CreateAccountForm } from "../components/forms/CreateAccountForm"; // Updated import path
import Navbar from "../components/Navbar";
const CreateAccount = () => {
  return (
    <div className="main-div flex flex-col min-h-screen px-20">
      <div className="flex gap-6 px-14">
        <div className="flex flex-row py-3 font-semibold w-82 h-24">
          Unbundl
          <div className="px-3 font-medium">
            <a href="" className="py-5 text-gray-500">
              SignUp for founders
            </a>
          </div>
        </div>
      </div>
      <Navbar />
      <hr className="w-1240" />

      <div className="flex flex-row py-10 px-5 flex-grow">
        <div className="w-260 h-168 font-normal text-justify">
          Let us know a bit more about you, and
          <br /> please provide some social links, so we <br /> can run a small
          background check on <br /> you. <br /> It’s very important for us to
          make the
          <br /> experience on the platform exclusive,
          <br /> where every member brings value
        </div>
        <div className="px-20 justify-center">
          <CreateAccountForm />
        </div>
      </div>

      <div className="flex justify-center gap-20 py-5 mt-auto">
        <Button className="flex">Cancel</Button>
        <Button className="flex">Next Step</Button>
      </div>
    </div>
  );
};

export default CreateAccount;
