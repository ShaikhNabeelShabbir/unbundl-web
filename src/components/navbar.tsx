const Navbar = () => {
  return (
    <div>
      <div className="flex justify-center flex-center gap-6 px-14 md:px-5 w-1240 h-hug">
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
    </div>
  );
};

export default Navbar;
