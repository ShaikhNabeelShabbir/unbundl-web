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

// Define the schema using Zod
const generalSchema = z.object({
  name: z.string().min(1, "Service Title is required"),
  country: z.string().min(1, "Category is required"),
  city: z.string().min(1, "Tags are required"),
  linkedin: z.string().min(1, "Tags are required"),
});

export function GeneralForm() {
  // Set up the form using useForm hook
  const form = useForm<z.infer<typeof generalSchema>>({
    resolver: zodResolver(generalSchema),
    defaultValues: {
      name: "",
      country: "",
      city: "",
      linkedin: "",
    },
  });

  // Define the submit handler
  function onSubmit(values: z.infer<typeof generalSchema>) {
    // Handle form submission
    console.log(values);
  }

  return (
    <div>
      <div className="main-div">
        <div className="justify-center py-[32px]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
        </div>
      </div>
    </div>
  );
}

export default GeneralForm;
