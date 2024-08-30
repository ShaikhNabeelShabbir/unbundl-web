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
import { MarketInformationFormSchema } from "@/schemas/market-information";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export function MarketInformationForm({ onNext }: { onNext: () => void }) {
  // Set up the form using useForm hook
  const form = useForm<z.infer<typeof MarketInformationFormSchema>>({
    resolver: zodResolver(MarketInformationFormSchema),
    defaultValues: {
      sector: "",
      targetAudience: "",
      marketValidation: "",
      businessModel: "",
      traction: "",
      competitors: "",
      uniqueInsight: "",
    },
  });

  // Define the submit handler
  function onSubmit(values: z.infer<typeof MarketInformationFormSchema>) {
    // Handle form submission
    console.log(values);
    onNext();
  }

  return (
    <div>
      <div className="main-div flex flex-col px-4 md:px-20 w-full items-center">
        <div className="flex flex-col md:flex-row py-10 md:px-5 flex-grow">
          <div className="w-full md:w-260 md:h-168 font-normal text-justify text-base text-black/50 py-16">
            Being in the right market at the right
            <br /> time is a big part of a startup's
            <br /> success. <br />
            <br />
            Show your potential investors that
            <br /> you are in the right market.
          </div>
          <div className="w-full md:px-[80px]">
            <div className="justify-center w-full md:w-[560px] py-[40px]">
              <Form {...form}>
                <form
                  id="signupForm"
                  onSubmit={form.handleSubmit((values) => {
                    onSubmit(values); // Validate and submit the form
                  })}
                  className="space-y-8"
                >
                  <FormField
                    name="sector"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-base">
                          Which sectors/space are you building in?{" "}
                        </FormLabel>
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={(value) => field.onChange(value)}
                          >
                            {" "}
                            <SelectTrigger>
                              <SelectValue placeholder="Yes" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Yes">Yes</SelectItem>
                              <SelectItem value="No">NO</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="targetAudience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-base">
                          Who is your target audience?
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Enter target audience"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="marketValidation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-base">
                          Have you validated the market? If so, how?
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Enter market validation"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="businessModel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-base">
                          What is the business model?{" "}
                        </FormLabel>
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={(value) => field.onChange(value)}
                          >
                            {" "}
                            <SelectTrigger>
                              <SelectValue placeholder="B2B" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="B2B">B2B</SelectItem>
                              <SelectItem value="B2C">B2C</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="traction"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-base">
                          Any traction early Users{" "}
                        </FormLabel>
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={(value) => field.onChange(value)}
                          >
                            {" "}
                            <SelectTrigger>
                              <SelectValue placeholder="<1000" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="<1000">1000</SelectItem>
                              <SelectItem value=">1000">1000</SelectItem>
                              <SelectItem value=">2000">2000</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="competitors"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-base">
                          Who are your closest competitors?
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Enter closest competitors"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="uniqueInsight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-base">
                          What is the unique insight that you have which others
                          are not working on?
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Enter unique insight"
                            {...field}
                          />
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
      </div>
    </div>
  );
}
