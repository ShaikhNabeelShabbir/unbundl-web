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
import { Button } from "../ui/button";
import { ExperienceSchema } from "@/schemas/experinece-schema";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export function ExperienceForm({ onNext }: { onNext: () => void }) {
  // Set up the form using useForm hook
  const form = useForm<z.infer<typeof ExperienceSchema>>({
    resolver: zodResolver(ExperienceSchema),
    defaultValues: {
      wantedPosition: "",
      expectedSalary: 0,
      workExperince: "",
      education: "",
      aboutYou: "",
      languages: "",
      relocate: "",
    },
  });

  // Define the submit handler
  function onSubmit(values: z.infer<typeof ExperienceSchema>) {
    // Handle form submission
    console.log(values);
    onNext(); // Call onNext to move to the next step
  }

  return (
    <div className="main-div overflow-auto max-h-[80vh]">
      <div className="justify-center py-[32px]">
        <Form {...form}>
          <form
            id="signupForm"
            onSubmit={form.handleSubmit((values) => {
              onSubmit(values); // Validate and submit the form
            })}
            className="space-y-8"
          >
            {" "}
            <FormField
              control={form.control}
              name="wantedPosition"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-base">
                    Wanted Position{" "}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter wanted Position" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="expectedSalary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-base">
                    Expected Salary{" "}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Expected Salary" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="aboutYou"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-base">
                    About You
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder="Tell us about yourself" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="workExperince"
                render={() => (
                  <FormItem>
                    <FormLabel className="font-medium text-base">
                      Work Experience
                    </FormLabel>
                    <br />
                    <FormControl>
                      <Button type="button">Add Work Experience</Button>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="education"
                render={() => (
                  <FormItem className="ml-[131px]">
                    <FormLabel className="font-medium text-base">
                      Education
                    </FormLabel>
                    <br />
                    <FormControl>
                      <Button type="button">Add Education</Button>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="languages"
                render={() => (
                  <FormItem>
                    <FormLabel className="font-medium text-base">
                      Languages
                    </FormLabel>
                    <br />
                    <FormControl>
                      <Button type="button">Add Languages</Button>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="relocate"
                render={({ field }) => (
                  <FormItem className="ml-[131px]">
                    <FormLabel className="font-medium text-base">
                      Are you able to relocate?
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
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
            </div>
          </form>
        </Form>
        <br />
      </div>
    </div>
  );
}

export default ExperienceForm;
