import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
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
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"; // Assuming you're using a custom wrapper around Radix UI's Select
import { Button } from "../ui/button";
import { generalSchema } from "@/schemas/general-schema";

export function GeneralForm({ onNext }: { onNext: () => void }) {
  // Set up the form using useForm hook
  const form = useForm<z.infer<typeof generalSchema>>({
    resolver: zodResolver(generalSchema),
    defaultValues: {
      name: "",
      country: "",
      city: "",
    },
  });

  // Define the submit handler
  function onSubmit(values: z.infer<typeof generalSchema>) {
    // Handle form submission
    console.log(values);
    onNext(); // Call onNext to move to the next step
  }

  return (
    <div>
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
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-base">
                      Name{" "}
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Service Title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="country"
                control={form.control}
                render={({}) => (
                  <FormItem>
                    <FormLabel className="font-medium text-base">
                      Country
                    </FormLabel>
                    <FormControl>
                      <Controller
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select Country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Dubai">Dubai</SelectItem>
                              <SelectItem value="USA">USA</SelectItem>
                              <SelectItem value="China">China</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="city"
                control={form.control}
                render={({}) => (
                  <FormItem>
                    <FormLabel className="font-medium text-base">
                      City
                    </FormLabel>
                    <FormControl>
                      <Controller
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select City" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Dubai">Dubai</SelectItem>
                              <SelectItem value="USA">USA</SelectItem>
                              <SelectItem value="China">China</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="linkedin"
                render={() => (
                  <FormItem>
                    <FormControl>
                      <div className="mt-2">
                        <Button type="button">Connect LinkedIn</Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default GeneralForm;
