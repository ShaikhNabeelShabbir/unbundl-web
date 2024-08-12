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
import { generalCompanySchema } from "@/schemas/generalCompanySchema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

export function GeneralInvestorInformationForm() {
  // Set up the form using useForm hook
  const form = useForm<z.infer<typeof generalCompanySchema>>({
    resolver: zodResolver(generalCompanySchema),
    defaultValues: {
      companyName: "",
      projectDescription: "",
      websiteLink: "",
      chain: "",
      category: "",
      developmentStage: "",
      teamSize: "",
      usefulLinks: "",
      calendlyLink: "",
      timezone: "",
    },
  });

  // Define the submit handler
  function onSubmit(values: z.infer<typeof generalCompanySchema>) {
    // Handle form submission
    console.log(values);
  }

  return (
    <div>
      <div className="main-div flex flex-col min-h-screen px-20">
        <div className="px-[440px] ">
          <div className="justify-center  w-[560px] py-[40px]">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-base">
                        Enter your Alias{" "}
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
                  name="chain"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-base">
                        Please give us some information about you, as an Angel{" "}
                      </FormLabel>
                      <FormControl>
                        <Textarea placeholder="Lorem Ipsum" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="category"
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
