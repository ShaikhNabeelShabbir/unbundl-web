import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { fundraisingSchema } from "@/schemas/fundraisingSchema";
import { Button } from "../ui/button";

export function CreateGigs() {
  // Set up the form using useForm hook
  const form = useForm<z.infer<typeof fundraisingSchema>>({
    resolver: zodResolver(fundraisingSchema),
    defaultValues: {
      fundraisingStatus: "",
      tokenStatus: "",
      financingStage: "",
      vcBackers: "",
      ticketSize: "",
    },
  });

  // Define the submit handler
  function onSubmit(values: z.infer<typeof fundraisingSchema>) {
    // Handle form submission
    console.log(values);
  }

  return (
    <div>
      <div className="main-div flex flex-col min-h-screen px-20">
        <div className="flex flex-row py-10 px-5 flex-grow">
          <div className="px-[80px] py-[40px] ">
            <div className="justify-center ">
              <div className="flex flex-col border border-red-600 px-[440px] justify-center">
                <p className="font-medium ">Create Services</p>
                <Button className=" h-45 w-88 text-sm px-[15px]">
                  Add your service
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
