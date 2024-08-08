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
import { projectInformationSchema } from "@/schemas/ProjectInformationSchema";

export function ProjectInformationForm() {
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
  }

  return (
    <div>
      <div className="main-div flex flex-col min-h-screen px-20">
        <div className="flex flex-row py-10 px-5 flex-grow">
          <div className="w-260 h-168 font-normal text-justify text-base text-gray-500  border border-red-600 py-1">
            The most important part about every <br /> startup is the
            information about your <br />
            product. <br />
            <br />
            Answer these questions carefully, this
            <br /> is what matters to investors.
          </div>
          <div className="px-20 justify-center border border-red-600 w-[560px]">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="problem"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-base ">
                        What Problem Are You Solving?
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Describe the problem" {...field} />
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
                      <FormLabel className="font-medium text-base">
                        Why Did You Start Working on This Idea?
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Reason for starting" {...field} />
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
                      <FormLabel className="font-medium text-base">
                        Since When Are You Working on This Idea?
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Enter the start date" {...field} />
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
                      <FormLabel className="font-medium text-base">
                        What Are You Building?
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
                  name="demoLink"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-base">
                        Provide a Link to Your Demo
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Enter demo link" {...field} />
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
