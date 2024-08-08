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
          <div className="w-260 h-168 font-normal text-justify text-base text-gray-500 py-[59px]">
            Being in the right market at the right
            <br /> time is a big part of a startup's
            <br /> success. <br />
            <br />
            Show your potential investors that
            <br /> you are in the right market.
          </div>
          <div className="px-[80px] ">
            <div className="justify-center border w-[560px] py-[40px]">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="sector"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-base ">
                          Which sector/space are you building in?
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Enter sector/space" {...field} />
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
                    control={form.control}
                    name="businessModel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-base">
                          What’s the business model of your product?
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter business model"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="traction"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-base">
                          Any traction/early users?
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter traction/early users"
                            {...field}
                          />
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
