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

// Define the schema using Zod
const overviewSchema = z.object({
  serviceTitle: z.string().min(1, "Service Title is required"),
  category: z.string().min(1, "Category is required"),
  tags: z.string().min(1, "Tags are required"),
});

export function SkillsForm() {
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
      <div className="main-div">
        <div className="justify-center py-[32px] space-y-[30px]">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-[30px]"
            >
              <FormField
                control={form.control}
                name="serviceTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-base">
                      Previous Clients
                    </FormLabel>
                    <FormControl>
                      <Button className="mt-2">Add work experience</Button>
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
                      Skills
                    </FormLabel>
                    <FormControl>
                      <Button className="mt-2">Add Skills</Button>
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
                      Languages
                    </FormLabel>
                    <FormControl>
                      <Button className="mt-2">Add Languages</Button>
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
                      Links to portfolio/Github/LinkedIn
                    </FormLabel>
                    <FormControl>
                      <Button className="mt-2">Add Links</Button>
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

export default SkillsForm;
