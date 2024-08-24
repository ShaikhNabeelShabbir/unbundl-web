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
import { formSchema } from "@/schemas/SignupSchemas";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
    <div className="main-div flex flex-col px-20 flex-wrap w-full items-center ">
      <div className="flex flex-row py-10 px-5">
        <div className="w-[260px] h-[168px] font-normal text-base text-justify text-1 text-black/50 py-16">
          Let us know a bit more about you, and
          <br /> please provide some social links, so we can run a small
          background check on you. <br /> <br />
          It’s very important for us to make the
          <br /> experience on the platform exclusive,
          <br /> where every member brings value
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
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-base">
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
                      <FormLabel className="font-medium text-base">
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
                      <FormLabel className="font-medium text-base">
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
                  <div className="flex flex-row gap-4">
                    <Button type="button" className=" h-11 w-20 text-sm">
                      LinkedIn
                    </Button>
                    <Button type="button" className=" h-11 w-20 text-sm">
                      Twitter
                    </Button>
                    <Button type="button" className="h-11 w-20 text-sm">
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
