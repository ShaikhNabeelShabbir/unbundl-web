import { Button } from "@/components/ui/button";

const AccountSettings = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className=" text-black py-8 px-12 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Back</h1>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-black">
            Help
          </a>
          <span>Bob Alice</span>
          <Button variant="outline" className="text-black border-black">
            Log Out
          </Button>
        </div>
      </div>
      <div className="pt-[106px] bg-black h-[300px]">
        {/* Content Section */}
        <div className="px-12 py-10 flex space-x-8">
          {/* Sidebar Links */}
          <div className="w-1/4 bg-gray-100 rounded-md p-6">
            <ul className="space-y-4">
              <li className="font-semibold">General</li>
              <li>Password</li>
              <li>Phone Number</li>
              <li>Choose Company</li>
              <li>Terms and Conditions</li>
              <li>Payments</li>
            </ul>
          </div>

          {/* Profile Form */}
          <div className="w-3/4 bg-gray-100 rounded-md p-6">
            <h2 className="text-lg font-semibold mb-4">Profile</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  value="Bob Alice"
                  className="w-full p-2 border border-gray-300 rounded"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value="john@viberate.io"
                  className="w-full p-2 border border-gray-300 rounded"
                  readOnly
                />
              </div>
              <Button className="bg-black text-white">Update</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
