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
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formSchema } from "@/schemas/signup-schemas";

export function TechForm({ onNext }: { onNext: () => void }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    onNext(); // Call onNext to move to the next step
  }

  return (
    <div className="main-div flex flex-col px-20 flex-wrap w-full items-center ">
      <div className="flex flex-row py-10 px-5">
        <div className="w-[260px] h-[168px] font-normal text-base text-justify text-1 text-black/50 py-16">
          Tech is a crucial part of every Web3 startup, tell us more about what
          technology you are using, this will help you to find investors, talent
          and service providers
        </div>
        <div className="px-20 ">
          <div className="justify-center w-[560px] py-10">
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
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-md">
                        Is blockchain/crypto necessary to solve this problem?{" "}
                      </FormLabel>
                      <FormControl>
                        <Select
                          value={field.value}
                          onValueChange={(value) => field.onChange(value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Yes" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Yes">Yes</SelectItem>
                            <SelectItem value="No">No</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col justify-start gap-3">
                  <p className="font-medium">
                    What does your tech stack include?
                  </p>
                  <div className="flex flex-row gap-4">
                    <Button type="button" className=" h-11 w-fit text-sm">
                      Add technology{" "}
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechForm;
