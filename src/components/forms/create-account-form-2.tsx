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

// Define the form component
export function CreateAccountForm2({ onNext }: { onNext: () => void }) {
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
    onNext(); // Call onNext to move to the next step
  }

  return (
    <div className="main-div flex flex-col px-20 flex-wrap w-full items-center ">
      <div className="flex flex-row py-10 px-5">
        <div className="justify-center w-[560px] py-10">
          <Form {...form}>
            <form
              id="signupForm"
              onSubmit={form.handleSubmit((values) => {
                onSubmit(values); // Validate and submit the form
              })}
              className="space-y-8"
            >
              {" "}
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
                <div className="flex flex-row gap-4">
                  <Button type="button" className=" h-11 w-[88px] text-sm">
                    LinkedIn
                  </Button>
                  <Button type="button" className=" h-11 w-[80px] text-sm">
                    Twitter
                  </Button>
                  <Button type="button" className="h-11 w-[80px] text-sm">
                    GitHub
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
