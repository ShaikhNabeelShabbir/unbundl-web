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

// Define the schema using Zod
const ExperienceSchema = z.object({
  wantedPosition: z.string().min(1, "Service Title is required"),
  expectedSalary: z.number().min(1, "Category is required"),
  tags: z.string().min(1, "Tags are required"),
});

export function ExperienceForm() {
  // Set up the form using useForm hook
  const form = useForm<z.infer<typeof ExperienceSchema>>({
    resolver: zodResolver(ExperienceSchema),
    defaultValues: {
      wantedPosition: "",
      expectedSalary: 0,
      tags: "",
    },
  });

  // Define the submit handler
  function onSubmit(values: z.infer<typeof ExperienceSchema>) {
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
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ExperienceForm;
