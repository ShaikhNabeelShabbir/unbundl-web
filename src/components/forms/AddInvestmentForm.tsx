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
import { addInvestmentSchema } from "@/schemas/addInvestmentSchema";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

// Define the schema using Zod

export function AddInvestmentForm() {
  // Set up the form using useForm hook
  const form = useForm<z.infer<typeof addInvestmentSchema>>({
    resolver: zodResolver(addInvestmentSchema),
    defaultValues: {
      companyName: "",
      companyWebsite: "",
      personEmail: "",
      amountInvested: 0,
      dateofInvestment: "",
      investmentRound: "",
    },
  });

  // Define the submit handler
  function onSubmit(values: z.infer<typeof addInvestmentSchema>) {
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
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-base">
                      Enter the company/fund Name{" "}
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
                name="companyWebsite"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-base">
                      Enter the company website{" "}
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
                name="personEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-base">
                      Enter an email of a person, that you are connected with
                      from that company{" "}
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
                name="amountInvested"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-base">
                      How much did you invest?{" "}
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
                name="dateofInvestment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-base">
                      When did you invest?{" "}
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Service Title" {...field} />
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
                      What was the round of investment?{" "}
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
          <div className="fixed bottom-0 left-0 right-0 z-50 py-5 flex justify-center gap-[233px]">
            <Button className="flex text-base bg-white text-blacka">
              Cancel
            </Button>
            <Button className="flex text-base">
              Add Investment to the portfolio
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddInvestmentForm;
