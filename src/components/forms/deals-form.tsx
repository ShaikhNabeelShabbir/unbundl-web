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
import { dealsSchema } from "@/schemas/deals-schema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

export function DealsForm({ onNext }: { onNext: () => void }) {
  // Set up the form using useForm hook
  const form = useForm<z.infer<typeof dealsSchema>>({
    resolver: zodResolver(dealsSchema),
    defaultValues: {
      investmentThesis: "",
      dealsSource: "",
      programm: "",
      fundSize: 0,
      months: 0,
      uniqueLPS: 0,
      stages: "",
    },
  });

  // Define the submit handler
  function onSubmit(values: z.infer<typeof dealsSchema>) {
    // Handle form submission
    console.log(values);
    onNext(); // Call onNext to move to the next step
  }

  return (
    <div>
      <div className="main-div flex flex-col px-20 flex-wrap w-full items-center ">
        <div className="px-[440px] ">
          <div className="justify-center  w-[560px] py-[40px]">
            <Form {...form}>
              <form
                id="signupForm"
                onSubmit={form.handleSubmit((values) => {
                  onSubmit(values); // Validate and submit the form
                })}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="investmentThesis"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-base">
                        Enter your Investment Thesis{" "}
                      </FormLabel>
                      <FormControl>
                        <Textarea placeholder="a16z crypto" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="dealsSource"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-base">
                        How do you get most of your Deals?{" "}
                      </FormLabel>
                      <FormControl>
                        <Select {...field}>
                          <SelectTrigger>
                            <SelectValue placeholder="Network" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Network">Network</SelectItem>
                            <SelectItem value="Reference">Reference</SelectItem>
                            <SelectItem value="ADS">ADS</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="programm"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-base">
                        Do you have an Incubation/Acceleration programm?{" "}
                      </FormLabel>
                      <FormControl>
                        <Select {...field}>
                          <SelectTrigger>
                            <SelectValue placeholder="Incubation" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Incubation">
                              Incubation
                            </SelectItem>
                            <SelectItem value="Acceleration">
                              Acceleration
                            </SelectItem>
                            <SelectItem value="Acceleration">
                              Acceleration
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="fundSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-base">
                        What’s your Fund Size?{" "}
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="a16z crypto" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="months"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-base">
                        How many deals did you do in the last 12 months?{" "}
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="a16z crypto" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="uniqueLPS"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-base">
                        How many unique LPs you have invested?{" "}
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="a16z crypto" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="stages"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-base">
                        In what stages do you invest?{" "}
                      </FormLabel>
                      <FormControl>
                        <Select {...field}>
                          <SelectTrigger>
                            <SelectValue placeholder="Early" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Early">Early</SelectItem>
                            <SelectItem value="Mid">Mid</SelectItem>
                            <SelectItem value="Late">Late</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
