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

export function GeneralCompanyInformationForm() {
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
        <div className="flex flex-row py-10 px-5 flex-grow">
          <div className="w-260 h-168 font-normal text-justify">
            Tell us the general information about
            <br />
            your startup, this will help us to learn <br />
            more about what you are doing, so you <br /> can easily find
            investors, advisors or <br />
            great talent for your company.
          </div>
          <div className="px-20 justify-center">
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
                      <FormLabel className="font-medium">
                        Company Name
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
                  name="projectDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium">
                        Describe Your Project
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
                  name="websiteLink"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium">
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
                      <FormLabel className="font-medium">
                        On What Chain Are You Building On?
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
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium">
                        What Is the Category of Your Web3 Startup?
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Enter category" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="developmentStage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium">
                        How Far Did You Move in the Development of Your Project?
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter development stage"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="teamSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium">
                        What Is the Size of Your Team?
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Enter team size" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="usefulLinks"
                  render={() => (
                    <FormItem>
                      <FormLabel className="font-medium">
                        Add Useful Links or Files
                      </FormLabel>
                      <div className="flex flex-row justify-center gap-4">
                        <Button className="space-x-5 h-45 w-88">
                          LinkedIn
                        </Button>
                        <Button className="space-x-5 h-45 w-88">Twitter</Button>
                        <Button className="space-x-5 h-45 w-88">GitHub</Button>
                        <Button className="space-x-5 h-45 w-88">
                          Whitepaper
                        </Button>
                        <Button className="space-x-5 h-45 w-88">
                          Pitch Deck
                        </Button>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="calendlyLink"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium">
                        Add Your Calendly Link
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Calendly link" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="timezone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium">Timezone</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your timezone" {...field} />
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
