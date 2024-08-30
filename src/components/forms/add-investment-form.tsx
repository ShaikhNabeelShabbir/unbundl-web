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
    <div>
      <div className="main-div">
        <div className="justify-center py-[32px]">
          <Form {...form}>
            <form className="space-y-8">
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-base">
                      Enter the company/fund Name{" "}
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Company Name" {...field} />
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
                      <Input placeholder="Enter Company Website" {...field} />
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
                      Enter an email of a person that you are connected with
                      from that company{" "}
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Person Email" {...field} />
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
                      <Input
                        type="number"
                        placeholder="Enter Amount Invested"
                        {...field}
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
                      When did you invest?{" "}
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        placeholder="Enter Date of Investment"
                        {...field}
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
                      What was the round of investment?{" "}
                    </FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={(value) => field.onChange(value)}
                      >
                        {" "}
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
              <br />
              <div className="fixed bottom-0 left-0 right-0 z-50 py-5 flex justify-center gap-[233px]">
                <Button
                  className="flex text-base bg-white text-black"
                  variant="link"
                  type="button"
                >
                  Cancel
                </Button>
                <Button className="flex text-base" type="submit">
                  Add Investment to the portfolio
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default AddInvestmentForm;
