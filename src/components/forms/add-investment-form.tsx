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
import { addInvestmentSchema } from "@/schemas/add-investment-schema";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export function AddInvestmentForm() {
  const form = useForm<z.infer<typeof addInvestmentSchema>>({
    resolver: zodResolver(addInvestmentSchema),
    defaultValues: {
      companyName: "",
      companyWebsite: "",
      personEmail: "",
      amountInvested: "",
      dateofInvestment: "",
      investmentRound: "",
    },
  });

  return (
    <div className="px-4 py-8 md:px-8 md:py-12">
      <div className="max-w-lg mx-auto">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((values) => console.log(values))}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-base">
                    Enter the company/fund Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Company Name"
                      {...field}
                      className="w-full"
                    />
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
                    Enter the company website
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Company Website"
                      {...field}
                      className="w-full"
                    />
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
                    Enter an email of a person that you are connected with from
                    that company
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Person Email"
                      {...field}
                      className="w-full"
                    />
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
                    How much did you invest?
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter Amount Invested"
                      {...field}
                      className="w-full"
                    />
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
                    When did you invest?
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      placeholder="Enter Date of Investment"
                      {...field}
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="investmentRound"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-base">
                    What was the round of investment?
                  </FormLabel>
                  <FormControl>
                    <Select
                      value={field.value}
                      onValueChange={(value) => field.onChange(value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Round" />
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

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
              <Button className="w-full sm:w-auto" variant="link" type="button">
                Cancel
              </Button>
              <Button className="w-full sm:w-auto" type="submit">
                Add Investment to the portfolio
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default AddInvestmentForm;
