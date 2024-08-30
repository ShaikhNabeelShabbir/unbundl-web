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
import { descriptionSchema } from "@/schemas/description-schema";

export function OverviewForm({ onNext }: { onNext: () => void }) {
  // Set up the form using useForm hook
  const form = useForm<z.infer<typeof descriptionSchema>>({
    resolver: zodResolver(descriptionSchema),
    defaultValues: {
      description: "",
    },
  });

  // Define the submit handler
  function onSubmit(values: z.infer<typeof descriptionSchema>) {
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
              >              <FormField
                control={form.control}
                name="description"
                render={({}) => (
                  <FormItem>
                    <FormLabel className="font-medium text-base">
                      About You{" "}
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

export default OverviewForm;
