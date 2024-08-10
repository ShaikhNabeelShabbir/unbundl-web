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
import { Textarea } from "@/components/ui/textarea";

// Define the schema using Zod
const linkSchema = z.object({
  links: z.string().min(1, "Service Title is required"),
});

export function LinksForm() {
  // Set up the form using useForm hook
  const form = useForm<z.infer<typeof linkSchema>>({
    resolver: zodResolver(linkSchema),
    defaultValues: {
      links: "",
    },
  });

  // Define the submit handler
  function onSubmit(values: z.infer<typeof linkSchema>) {
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
                name="links"
                render={({}) => (
                  <FormItem>
                    <FormLabel className="font-medium text-base">
                      Enter the relevant links to your Portfolio, GitHub, e.t.c.{" "}
                    </FormLabel>
                    <FormControl>
                      <Textarea placeholder="About Youekf" />
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

export default LinksForm;
