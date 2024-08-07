import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { formSchema } from "@/schemas/SignupSchemas";

// Define the form component
export function CreateAccountForm() {
  // Set up the form using useForm hook
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      username: "",
      role: "",
    },
  });

  // Define the submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Handle form submission
    console.log(values);
  }

  return (
    <div className="flex flex-row py-10 px-5 flex-grow">
      <div className="w-260 h-168 font-normal text-justify">
        Let us know a bit more about you, and
        <br /> please provide some social links, so we <br /> can run a small
        background check on <br /> you. <br /> It’s very important for us to
        make the
        <br /> experience on the platform exclusive,
        <br /> where every member brings value
      </div>
      <div className="px-20 justify-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">Enter your name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <br />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">
                    Choose a Username
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter a username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <br />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">I am a</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your role" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col justify-center gap-4">
            <p className="font-medium ">Connect your social media</p>
            <div className="flex flex-row justify-center gap-4 ">
              <Button className="space-x-5 h-45 w-88">LinkedIn</Button>
              <Button className="space-x-5 h-45 w-88">Twitter</Button>
              <Button className="space-x-5 h-45 w-88">GitHub</Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
    </div>
  );
}
