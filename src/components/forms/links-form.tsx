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
import { linkSchema } from "@/schemas/link-schema";

export function LinksForm({ onNext }: { onNext: () => void }) {
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
    onNext(); // Call onNext to move to the next step
  }

  return (
    <div>
      <div className="main-div">
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
