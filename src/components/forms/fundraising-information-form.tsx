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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import CreateCapTableForm from "./create-cap-table-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { fundraisingSchema } from "@/schemas/fundraising-schema";

export function FundraisingIformationForm({ onNext }: { onNext: () => void }) {
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
    onNext(); // Call onNext to move to the next step
  }

  return (
    <div>
      <div className="main-div flex flex-col px-20 flex-wrap w-full items-center ">
        <div className="flex flex-row py-10 px-5 flex-grow">
          <div className="w-260 h-168 font-normal text-justify text-base text-black/50   py-16">
            We would like to know are you <br />
            fundraising or not, because Undundle
            <br /> is the best place to fundraise for web3
            <br /> startups.
            <br />
            <br /> If you are fundraising, please provide
            <br />
            us with a cap table.
          </div>
          <div className="px-[80px] ">
            <div className="justify-center w-[560px] py-[40px]">
              <Form {...form}>
              <form
                id="signupForm"
                onSubmit={form.handleSubmit((values) => {
                  onSubmit(values); // Validate and submit the form
                })}
                className="space-y-8"
              >
                  <FormField
                    name="fundraisingStatus"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-base">
                          Are you currently Fundraising?{" "}
                        </FormLabel>
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={(value) => field.onChange(value)}
                          >
                            {" "}
                            <SelectTrigger>
                              <SelectValue placeholder="Yes" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="no">No</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="tokenStatus"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-base">
                          Is there a token or will one come in the future?{" "}
                        </FormLabel>
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={(value) => field.onChange(value)}
                          >
                            {" "}
                            <SelectTrigger>
                              <SelectValue placeholder="Yes" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="no">No</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="financingStage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-base">
                          What’s the stage of financing?{" "}
                        </FormLabel>
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={(value) => field.onChange(value)}
                          >
                            {" "}
                            <SelectTrigger>
                              <SelectValue placeholder="Seed" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="seed">Seed</SelectItem>
                              <SelectItem value="mid">Mid</SelectItem>
                              <SelectItem value="Large">Large</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <p className="font-medium text-base text-black py-0">
                    Add VC Bakers
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button type="button" className="h-11 w-88 text-sm px-4">
                        Add Cap table{" "}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-fit ">
                      <DialogHeader>
                        <DialogTitle className="font-semibold text-xl">
                          Create CAP table
                        </DialogTitle>
                      </DialogHeader>
                      <CreateCapTableForm />
                    </DialogContent>
                  </Dialog>
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
    </div>
  );
}
