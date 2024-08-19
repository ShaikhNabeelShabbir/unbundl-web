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
import { MarketInformationFormSchema } from "@/schemas/MarketInformation";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export function MarketInformationForm() {
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
  }

  return (
    <div>
      <div className="main-div flex flex-col min-h-screen px-20">
        <div className="flex flex-row py-10 px-5 flex-grow">
          <div className="w-260 h-168 font-normal text-justify text-base text-black/50 py-[59px]">
            Being in the right market at the right
            <br /> time is a big part of a startup's
            <br /> success. <br />
            <br />
            Show your potential investors that
            <br /> you are in the right market.
          </div>
          <div className="px-[80px] ">
            <div className="justify-center  w-[560px] py-[40px]">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    name="teamSize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-base">
                          Which sectors/space are you building in?{" "}
                        </FormLabel>
                        <FormControl>
                          <Select {...field}>
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
                    name="teamSize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-base">
                          What is the business model?{" "}
                        </FormLabel>
                        <FormControl>
                          <Select {...field}>
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
                    name="teamSize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-base">
                          Any traction early Users{" "}
                        </FormLabel>
                        <FormControl>
                          <Select {...field}>
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
