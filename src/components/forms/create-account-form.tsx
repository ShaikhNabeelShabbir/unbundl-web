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
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formSchema } from "@/schemas/signup-schemas";

export function CreateAccountForm({ onNext }: { onNext: () => void }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      username: "",
      role: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    onNext(); // Call onNext to move to the next step
  }

  return (
    <div className="main-div flex flex-col px-4 md:px-20 w-full items-center">
      <div className="flex flex-col md:flex-row py-10 md:px-5 flex-grow">
        <div className="w-full md:w-260 md:h-168 font-normal text-justify text-base text-black/50 py-2">
          Let us know a bit more about you, <br /> and please provide some
          social links, <br /> so we can run a small background check on you.
          <br />
          It’s very important for us to make the
          <br /> experience on the platform exclusive,
          <br /> where every member brings value
        </div>
        <div className="w-full md:px-[80px]">
          <div className="justify-center w-full md:w-[560px] py-2">
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
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-md">
                        Enter your name
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-md">
                        Choose a Username
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Enter a username" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-md">
                        I am a
                      </FormLabel>
                      <FormControl>
                        <Select
                          value={field.value}
                          onValueChange={(value) => field.onChange(value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Founder" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Founder">Founder</SelectItem>
                            <SelectItem value="Engineer">Engineer</SelectItem>
                            <SelectItem value="Developer">Developer</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col justify-start gap-3">
                  <p className="font-medium">Connect your social media</p>
                  <div className="flex flex-wrap gap-4">
                    <Button type="button" className="h-11 w-24 text-sm">
                      LinkedIn
                    </Button>
                    <Button type="button" className="h-11 w-24 text-sm">
                      Twitter
                    </Button>
                    <Button type="button" className="h-11 w-24 text-sm">
                      GitHub
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
