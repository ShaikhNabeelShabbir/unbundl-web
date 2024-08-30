import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { generalInvestorSchema } from "@/schemas/general-investor-schema";

export function GeneralInvestorInformationForm({
  onNext,
}: {
  onNext: () => void;
}) {
  // Set up the form using useForm hook
  const form = useForm<z.infer<typeof generalInvestorSchema>>({
    resolver: zodResolver(generalInvestorSchema),
    defaultValues: {
      fundName: "",
      fundLegalName: "",
      websiteLink: "",
      description: "",
      location: "",
    },
  });

  // Define the submit handler
  function onSubmit(values: z.infer<typeof generalInvestorSchema>) {
    // Handle form submission
    console.log(values);
    onNext(); // Call onNext to move to the next step
  }

  return (
    <div>
      <div className="main-div flex flex-col px-20 flex-wrap w-full items-center ">
        <div className="px-[440px] ">
          <div className="justify-center  w-[560px] py-[40px]">
            <Form {...form}>
              <form
                id="signupForm"
                onSubmit={form.handleSubmit((values) => {
                  onSubmit(values); // Validate and submit the form
                })}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="fundName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-base">
                        Enter your Fund Name{" "}
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="a16z crypto" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="fundLegalName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-base">
                        Enter your legal Fund Name{" "}
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="a16z crypto" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="websiteLink"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-base">
                        Provide a Link to Your Website
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
                  name="description"
                  render={({}) => (
                    <FormItem>
                      <FormLabel className="font-medium text-base">
                        Enter the description of your fund{" "}
                      </FormLabel>
                      <FormControl>
                        <Textarea placeholder="Lorem Ipsum" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-base">
                        Chose your location{" "}
                      </FormLabel>
                      <FormControl>
                        <Select {...field}>
                          <SelectTrigger>
                            <SelectValue placeholder="Dubai" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Dubai">Dubai</SelectItem>
                            <SelectItem value="dark">USA</SelectItem>
                            <SelectItem value="system">India</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col justify-start gap-4">
                  <p className="font-medium">
                    Connect Social Links of your Fund
                  </p>
                  <div className="flex flex-row gap-4">
                    <Button type="button" className="space-x-5 h-45 w-88">
                      LinkedIn
                    </Button>
                    <Button type="button" className="space-x-5 h-45 w-88">
                      Twitter
                    </Button>
                    <Button type="button" className="space-x-5 h-45 w-88">
                      GitHub
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
