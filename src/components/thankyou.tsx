export const TeamsForm = () => {
  return (
    <div className="main-div flex flex-col min-h-screen px-20">
      <div className="flex flex-row flex-grow">
        <div className=" py-[40px]">
          <div className=" py-[292px] px-[379px] border border-red-800 font-medium text-xl text-center">
            <div className="font-medium text-xxl text-center">
              Thank you for creating an account!
            </div>
            <br />
            Your information is under review. We select service <br />
            providers very carefully, as we want to keep the quality of
            <br />
            talent top notch on Unbundl.
            <br /> <br /> You are going to get a confirmation email in the next
            24 <br /> hours. We might ask you to jump on a call with us, before
            <br />
            letting you in.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamsForm;
