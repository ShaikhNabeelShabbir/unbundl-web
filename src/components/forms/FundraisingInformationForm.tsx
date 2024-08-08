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

export function FundraisingIformationForm() {
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
          <div className="w-260 h-168 font-normal text-justify text-base text-gray-500  border border-red-600 py-1">
            We would like to know are you <br />
            fundraising or not, because Undundle
            <br /> is the best place to fundraise for web3
            <br /> startups.
            <br />
            <br /> If you are fundraising, please provide
            <br />
            us with a cap table.
          </div>
          <div className="px-20 justify-center border border-red-600 w-[560px]">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="fundraisingStatus"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-base">
                        Are you currently Fundraising?{" "}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your company name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="tokenStatus"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-base">
                        Is there a token or will one come in the future?{" "}
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Describe your project" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="financingStage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-base">
                        What’s the stage of financing?{" "}
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Enter website URL" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="vcBackers"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-base">
                        Add VC Backers{" "}
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Enter blockchain" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ticketSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-base">
                        What’s the ticket size?{" "}
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Enter category" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
