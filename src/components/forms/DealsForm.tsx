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

export function DealsForm() {
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
                        Enter your Investment Thesis{" "}
                      </FormLabel>
                      <FormControl>
                        <Textarea placeholder="a16z crypto" {...field} />
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
                        How do you get most of your Deals?{" "}
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
                <FormField
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-base">
                        Do you have an Incubation/Acceleration programm?{" "}
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

                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-base">
                        What’s your Fund Size?{" "}
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
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-base">
                        How many deals did you do in the last 12 months?{" "}
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
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-base">
                        How many unique LPs you have invested?{" "}
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="a16z crypto" {...field} />
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
                        In what stages do you invest?{" "}
                      </FormLabel>
                      <FormControl>
                        <Select {...field}>
                          <SelectTrigger>
                            <SelectValue placeholder="Early" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Early">Early</SelectItem>
                            <SelectItem value="Mid">Mid</SelectItem>
                            <SelectItem value="Late">Late</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
