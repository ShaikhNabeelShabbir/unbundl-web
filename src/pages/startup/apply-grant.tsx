import { Button } from "@/components/ui/button";

const ApplyGrant = () => {
  return (
    <div>
      <div>
        <p className="font-normal text-[12px] mb-[30px]">
          Here you can apply for a grant. You don’t need to fill out any
          information, as it’s already in your profile, just read about the
          grant, and apply
        </p>
        <p className="font-medium text-[12px] ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum eius
          omnis inventore quas repellendus facilis recusandae, saepe harum
          laboriosam quaerat iusto corrupti quod ab amet culpa molestiae quis
          vero animi.
          <br />
          <br />
          Information required:
          <ul>
            <li>Pitch deck </li>
            <li>Founders </li>
            <li>Product Information </li>
            <li>Fundraising information</li>
          </ul>
          <br />
          Please provide this information to apply for the grant:{" "}
          <ul>
            <li>Product Information </li>
            <li>Fundraising information</li>
          </ul>
        </p>
        <p>Grantwebsite.io</p>
      </div>
      <br />
      <br />
      <div className="fixed bottom-0 left-0 right-0 z-50 py-5 flex justify-center gap-[233px]">
        <Button className="flex text-base text-black" variant="link">
          Cancel
        </Button>
        <Button className="flex text-base">Next Step</Button>
      </div>
    </div>
  );
};

export default ApplyGrant;
