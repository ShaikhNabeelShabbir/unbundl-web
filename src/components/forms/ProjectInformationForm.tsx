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
import { Textarea } from "../ui/textarea";

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
      <div className="main-div flex flex-col px-20 flex-wrap w-full items-center ">
        <div className="flex flex-row py-10 px-5 flex-grow">
          <div className="w-260 h-168 font-normal text-justify text-base text-black/50 py-16">
            The most important part about every <br /> startup is the
            information about your <br />
            product. <br />
            <br />
            Answer these questions carefully, this
            <br /> is what matters to investors.
          </div>
          <div className="px-[80px] ">
            <div className="justify-center w-[560px] py-[40px]">
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
                          <Textarea
                            placeholder="Describe the problem"
                            {...field}
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
                        <FormLabel className="font-medium text-base">
                          Why Did You Start Working on This Idea?
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Reason for starting"
                            {...field}
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
                        <FormLabel className="font-medium text-base">
                          Since When Are You Working on This Idea?
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter the start date"
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
                        <FormLabel className="font-medium text-base">
                          What Are You Building?
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe your project"
                            {...field}
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
    </div>
  );
}
