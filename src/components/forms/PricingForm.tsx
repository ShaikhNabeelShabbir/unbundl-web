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
import { pricingSchema } from "@/schemas/pricingSchema";

export function PricingForm() {
  // Set up the form using useForm hook
  const form = useForm<z.infer<typeof pricingSchema>>({
    resolver: zodResolver(pricingSchema),
    defaultValues: {
      category: "",
      minimumBudget: "",
    },
  });

  // Define the submit handler
  function onSubmit(values: z.infer<typeof pricingSchema>) {
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
                name="category"
                control={form.control}
                render={({}) => (
                  <FormItem>
                    <FormLabel className="font-medium text-base">
                      I am ready for
                    </FormLabel>
                    <FormControl>
                      <Controller
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select Category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="founder">Founder</SelectItem>
                              <SelectItem value="engineer">Engineer</SelectItem>
                              <SelectItem value="developer">
                                Developer
                              </SelectItem>
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
                name="minimumBudget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-base">
                      Minimum Budget{" "}
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

export default PricingForm;
