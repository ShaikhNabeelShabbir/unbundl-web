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

// Define the schema using Zod
const overviewSchema = z.object({
  serviceTitle: z.string().min(1, "Service Title is required"),
  category: z.string().min(1, "Category is required"),
  tags: z.string().min(1, "Tags are required"),
});

export function DescriptionForm() {
  // Set up the form using useForm hook
  const form = useForm<z.infer<typeof overviewSchema>>({
    resolver: zodResolver(overviewSchema),
    defaultValues: {
      serviceTitle: "",
      category: "",
      tags: "",
    },
  });

  // Define the submit handler
  function onSubmit(values: z.infer<typeof overviewSchema>) {
    // Handle form submission
    console.log(values);
  }

  return (
    <div>
      <div className="main-div ">
        <div className="justify-center py-[32px] ">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="serviceTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-base">
                      Service Title
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Service Title" {...field} />
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
                    <FormLabel className="font-medium text-base">
                      Category
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Category" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-base">
                      Enter Tags
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Tags" {...field} />
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

export default DescriptionForm;
