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
import { projectInformationSchema } from "@/schemas/project-information-schema";
import { Textarea } from "../ui/textarea";

export function ProjectInformationForm({ onNext }: { onNext: () => void }) {
  const form = useForm<z.infer<typeof projectInformationSchema>>({
    resolver: zodResolver(projectInformationSchema),
    defaultValues: {
      problem: "",
      startReason: "",
      startDate: "",
      projectDescription: "",
      demoLink: "",
    },
  });

  // Define the submit handler
  function onSubmit(values: z.infer<typeof projectInformationSchema>) {
    // Handle form submission
    console.log(values);
    onNext();
  }

  return (
    <div className="main-div flex flex-col px-4 md:px-20 w-full items-center">
      <div className="flex flex-col md:flex-row py-10 md:px-5 flex-grow">
        <div className="w-full md:w-260 md:h-168 font-normal text-justify text-base text-black/50 py-2">
          The most important part about every <br /> startup is the information
          about your product. <br /> Answer these questions carefully, <br />{" "}
          this is what matters to investors.
        </div>
        <div className="w-full md:px-[80px]">
          <div className="justify-center w-full md:w-[560px] py-2">
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
                  name="problem"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-sm md:text-md">
                        What Problem Are You Solving?
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe the problem"
                          {...field}
                          className="text-sm md:text-base"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="startReason"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-sm md:text-md">
                        Why Did You Start Working on This Idea?
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Reason for starting"
                          {...field}
                          className="text-sm md:text-base"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="startDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-sm md:text-md">
                        Since When Are You Working on This Idea?
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter the start date"
                          {...field}
                          className="text-sm md:text-base"
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
                      <FormLabel className="font-medium text-sm md:text-md">
                        What Are You Building?
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe your project"
                          {...field}
                          className="text-sm md:text-base"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="demoLink"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-sm md:text-md">
                        Provide a Link to Your Demo
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter demo link"
                          {...field}
                          className="text-sm md:text-base"
                        />
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
